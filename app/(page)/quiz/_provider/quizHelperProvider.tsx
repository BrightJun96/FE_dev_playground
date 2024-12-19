"use client"

import useQuizStorageContext from "@/app/(page)/quiz/_context/_hook/useQuizStorageContext";
import quizStorageHelperContext from "@/app/(page)/quiz/_context/quizStorageHelperContext";
import {QuizNavigator} from "@/app/(page)/quiz/_helper/QuizNavigator";
import {QuizStorageHelper} from "@/app/(page)/quiz/_helper/QuizStorageHelper";
import {useRouter} from "next/navigation";
import React, {useEffect} from 'react';

// 퀴즈 헬퍼 프로바이더(클라이언트용)
function QuizStorageHelperProvider({children}:{children:React.ReactNode}) {

    const router = useRouter();
    const quizStorage = useQuizStorageContext()
    const [quizHelper, setQuizHelper] = React.useState<QuizStorageHelper | null>(null);

    useEffect(() => {
        if(quizStorage) {
            const navigator = new QuizNavigator({
                navigate: (url: string) => router.push(url),
            });
            const quizHelper = new QuizStorageHelper(quizStorage, navigator)
            setQuizHelper(quizHelper);
        }
    }, [quizStorage]);


    return (
        <quizStorageHelperContext.Provider
            value={quizHelper}>
            {children}
        </quizStorageHelperContext.Provider>
    );
}

export default QuizStorageHelperProvider;
