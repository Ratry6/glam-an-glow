import { useEffect, useState } from "react";
import firebaseInitialization from "../../Pages/Login/Firebase/Firebase.init";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

//initialize firebase app
firebaseInitialization();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();

    //create new user
    const createUser = (email, password, history) => {
        console.log(email, password);
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setError('');
                const newUser = { email};
                setUser(newUser);
                //save user to database
                saveUser(email);
                history.push('/home')
               
                

            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => setIsLoading(false))

    }

    //Sign in user
    const signInUser = (email, password, uri, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                history.push(uri);
               
                setError('');



            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));

    }
    const saveUser = (email, displayName) => {
        const user = { email, displayName };
        fetch('https://quiet-sands-64773.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    //OBSERVER
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({});
            }
            setIsLoading(false);
        });

    }, []);

    //ADMIN
    useEffect(() => {
        fetch(`https://quiet-sands-64773.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {

                setAdmin(data.admin)
                // console.log(data.admin)
            })
    }, [user.email])


    //LOGOUT
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    return {
        user,
        admin,
        createUser,
        signInUser,
        isLoading,
        error,
        logout
    }
}

export default useFirebase;