let backendHost;

const hostname = window && window.location && window.location.hostname;

if (hostname === "localhost") {
  backendHost = "http://localhost:8080";
} else {
  backendHost =
    "http://prod-todo-backend-dns.ap-northeast-2.elasticbeanstalk.com/"; // 자기 주소로 바꾸기
}

export const API_BASE_URL = `${backendHost}`;
