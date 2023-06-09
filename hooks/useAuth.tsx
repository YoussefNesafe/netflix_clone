/* eslint-disable react-hooks/exhaustive-deps */
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	User,
} from "firebase/auth";

import { useRouter } from "next/router";
import { useContext, useEffect, useMemo, useState } from "react";
import { auth } from "../firebase";
import AuthContext from "@/context/authContext";
import { handleErrorMsg } from "@/utils/handleErrors";

interface AuthProviderProps {
	children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
	const router = useRouter();
	const [user, setUser] = useState<User | null>(null);
	const [error, setError] = useState(null);
	const [initialLoading, setInitialLoading] = useState(true);
	const [loading, setLoading] = useState(false);

	useEffect(
		() =>
			onAuthStateChanged(auth, (user) => {
				if (user) {
					setUser(user);
					setLoading(false);
				} else {
					setUser(null);
					setLoading(true);
					router.push("/login");
				}

				setInitialLoading(false);
			}),
		[auth]
	);

	const signUp = async (email: string, password: string) => {
		setLoading(true);

		await createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setUser(userCredential.user);
				router.push("/");
				setLoading(false);
			})
			.catch((error) => alert(handleErrorMsg(error.message)))
			.finally(() => setLoading(false));
	};

	const signIn = async (email: string, password: string) => {
		setLoading(true);
		await signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				setUser(userCredential.user);
				router.push("/");
				setLoading(false);
			})
			.catch((error) => alert(handleErrorMsg(error.message)))
			.finally(() => setLoading(false));
	};

	const logout = async () => {
		setLoading(true);

		signOut(auth)
			.then(() => {
				setUser(null);
			})
			.catch((error) => alert(error.message))
			.finally(() => setLoading(false));
	};

	const memoedValue = useMemo(
		() => ({ user, signUp, signIn, error, loading, logout }),
		[user, loading, error]
	);

	return (
		<AuthContext.Provider value={memoedValue}>{!initialLoading && children}</AuthContext.Provider>
	);
};

const useAuth = () => {
	return useContext(AuthContext);
};
export default useAuth;
