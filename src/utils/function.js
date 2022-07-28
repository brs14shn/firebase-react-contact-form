import { getDatabase, onValue, remove } from "firebase/database";
import firebase from "./firebase"
import {  ref, set,push } from "firebase/database";
import { useEffect, useState } from "react";

//* Bilgi Ekleme
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

//* Bilgiyi  Çağırma
export const useFetch = () => {
    const [isLoading, setIsLoading] = useState();
    const [contactList, setContactList] = useState();
    useEffect(() => {
        const db = getDatabase(firebase);
        const userRef=ref(db,"users/")
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const userArray = []
            for (let id in data) {
                userArray.push({id,...data[id]})
            }
            setContactList(userArray)
            isLoading(false)
        })
    },[])
    return {isLoading,contactList}
}

export const DeleteUser=(id)=>{
    const db=getDatabase(firebase)
    const userRef=ref(db,"users/")
    remove(ref(db,"users/"+id))

}