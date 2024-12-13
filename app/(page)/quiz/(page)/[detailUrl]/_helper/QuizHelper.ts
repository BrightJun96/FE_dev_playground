import {QuizNavigator} from "@/app/(page)/quiz/(page)/[detailUrl]/_helper/QuizNavigator";
import {QuizStorageManager} from "@/app/(page)/quiz/(page)/[detailUrl]/_helper/QuizStoreManager";
import {ArrayUtils} from "@/app/_utils/class/ArrayUtils";

// 퀴즈 로직 관련 클래스
export class QuizHelper {

    constructor(
        private storageManager: QuizStorageManager,
        private navigator: QuizNavigator,
    ) {}

    // 푼 문제 저장, 기존에 푼 문제가 있다면 추가,없다면 새로 저장
    saveSolvedQuiz(currentQuiz: string) {
        const solvedQuizList = this.storageManager.getSolvedQuiz();
        const updatedList = ArrayUtils.removeDuplicate([...solvedQuizList, currentQuiz]);
        this.storageManager.saveSolvedQuiz(updatedList);
    }

    // 안 푼 문제 중 랜덤으로 하나 반환
     getRandomOneFromUnsolvedQuiz() {
        const unsolvedQuiz = this.getUnsolvedQuiz();
        return ArrayUtils.pickRandomOne<string>(unsolvedQuiz);
    }

    // 모든 퀴즈를 푼 경우, 퀴즈 완료 페이지로 이동
    redirectToCompletionPageIfAllSolved(){
        if(this.isAllQuizSolved()) {
            this.navigator.navigate("/quiz/completed");
        }
    }

    // 퀴즈 URL 목록 데이터가 없는 경우, 퀴즈 시작 페이지로 리다이렉트
    redirectToQuizStartPageIfNoQuizData() {
        if(this.storageManager.getQuizUrlList().length === 0) {
            this.navigator.navigate("/quiz");
        }
    }

    // 안 푼 문제 조회
    getUnsolvedQuiz(): string[] {
        const quizUrlList = this.storageManager.getQuizUrlList();
        const solvedQuiz = this.storageManager.getSolvedQuiz();
        return ArrayUtils.getDifference<string>(quizUrlList, solvedQuiz);
    }

    // 모든 퀴즈가 풀렸는지 확인
    isAllQuizSolved(): boolean {
        const quizUrlList = this.storageManager.getQuizUrlList();
        const solvedQuiz = this.storageManager.getSolvedQuiz();
        return ArrayUtils.isEqualLength<string>(quizUrlList, solvedQuiz);
    }

}

