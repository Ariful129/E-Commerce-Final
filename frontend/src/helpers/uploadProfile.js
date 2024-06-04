

const uploadProfile = async(image) => {
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset","E_commerce_profile")
    

    const dataResponse = await fetch('https://api.cloudinary.com/v1_1/dcp31rdfg/image/upload',{
        method : "post",
        body : formData
    })

    return dataResponse.json()
}

export default uploadProfile