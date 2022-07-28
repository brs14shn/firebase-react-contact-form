import { getDatabase } from "firebase/database";
import firebase from "./firebase"
import {  ref, set,push } from "firebase/database";






export const AddUser=(info)=>{

    const db = getDatabase(firebase);
    const userRef=ref(db,"users")
    const newRef=push(userRef)
    set(newRef,{
        username:info.username,
        phoneNumber:info.phoneNumber,
        gender:info.gender
    })

}