import request from "@/utils/request";

export function csrf() {
    return request({
        url: "/sanctum/csrf-cookie",
        method: "get",
    });
}
export function upload_excel(data) {
    return request({
        url: "/central-database/upload-excel",
        method: "post",
        data: data,
    });
}

export function sync_uploaded_data(data) {
    return request({
        url: "/central-database/sync-uploaded-data",
        method: "post",
        data: data,
    });
}

export function upload_excel_schedule(data) {
    return request({
        url: "/hris/upload_excel_schedule",
        method: "post",
        data: data,
    });
}
