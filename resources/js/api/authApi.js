import request from "@/utils/request";

export function csrf() {
    return request({
        url: "/sanctum/csrf-cookie",
        method: "get",
    });
}

export function login(data) {
    return request({
        url: "/login",
        method: "post",
        data: data,
    });
}

export function logout() {
    return request({
        url: "/logout",
        method: "get",
    });
}
