function chunkify(a, size = 3) {
    const chunks = []

    for (let i = 0; i < a.length; i += size) {
        const chunk = a.slice(i, i + size)
        chunks.push(chunk)
    }

    return chunks
}

export default chunkify