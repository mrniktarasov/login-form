export function getHash(email: string, password: string): string {
    const common = String(email) + '--' + password;
    let hash = 0;
    for (let i = 0, len = common.length; i < len; i++) {
        let chr = common.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
    }
    return String(hash);
}
