export const notification = {
    requestPermission() {
        const result = Notification.requestPermission();
        return result;
    },
    generate(title: string, body?: string, icon?: string) {
        return new Notification(title, { body, icon });
    },
};
