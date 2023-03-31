import React from 'react';
import{getDocs,collection}from "firebase/firestore";
import {db}from "../firebase-config";
import {useState , useEffect} from 'react';

function Home() {

  const [postLists, setPostList]=useState([]);
  const postsCollectionRef=collection(db, "posts");

    useEffect(()=>{

      const getPosts=async()=>{
        const data=await getDocs(postsCollectionRef);
        console.log(data);
      };

      getPosts();

    });


    return (
    <div className="homePage">Home</div>
  )
}

export default Home;