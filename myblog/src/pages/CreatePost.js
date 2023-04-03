import React,{useState , useEffect} from 'react';
import {addDoc, collection} from"firebase/firestore";
import {db, auth}from "../firebase-config";
import{useNavigate} from "react-router-dom";



function CreatePost({isAuth}) {

  const [title,setTitle]=useState("");
  const [postText,setPostText]=useState("");

// create reference(variable) that collecting posts to add them to the table in database 
// pass db and name("posts") of the collection by string in database to the function "collection "
  const postsCollectionRef=collection(db, "posts");

// after submit post Text redirect yo home page 
  let navigate = useNavigate();

// a function that click submit btn to post the data to firebase and store it
  const createPost= async () =>{
  // each post will have title, post text, and author info in an object{}, and author info is from auth in firebase-config.js
    await addDoc(postsCollectionRef,{
      title, 
      postText, 
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };


  //  to make this page more secure
  useEffect(()=>{
    if (!isAuth ){
      navigate("/login");
    }

  } ,[]);


  return (
    <div className="createPostPage"> 
      <div className="cpContainer">
        <h1>Create a Post</h1>
        <div className="inputGp">
          <label>Title: </label>
          {/* onChange function is once writing anything in the input area  */}
          {/* setting setTitle equals event.target.value. which means euqals what you write in the input  */}
          <input placeholder='Title...' onChange={(event)=>{setTitle(event.target.value)}}/>
        </div>

        <div className="inputGp">
        <label>Post: </label>
          <textarea placeholder='Post... ' onChange={(event)=>{setPostText(event.target.value)}}/>
        </div>
        
        <button onClick={createPost}>Submit Post</button>
      </div>

    </div>
  );
}

export default CreatePost;