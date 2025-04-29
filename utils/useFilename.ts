export const useFilename = (filename: any) => {
    if (filename.name) return filename.name
    const last = filename.filename.split('/').pop()
    return last
}
