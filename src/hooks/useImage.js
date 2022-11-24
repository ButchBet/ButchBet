import React from 'react'

const useImage = (fileName) => {
    const [loading, setLoading] = React.useState(true)
    const [error, setError] = React.useState(null)
    const [image, setImage] = React.useState(null)

    React.useEffect(() => {
        const fetchImage = async () => {
            try {
                const response = await import(fileName) // change relative path to suit your needs
                setImage(response)
            } catch (err) {
                setError(err)
            } finally {
                setLoading(false)
            }
        }

        fetchImage()
    }, [fileName])

    return {
        loading,
        error,
        image,
    }
}

export default useImage;