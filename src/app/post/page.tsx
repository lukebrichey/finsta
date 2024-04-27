const CreatePost = () => {
    return (
        <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
            <form className="w-1/2">
                <label htmlFor="title" className="block mb-2">Title:</label>
                <input type="text" id="title" name="title" className="w-full border border-gray-300 rounded-md p-2 mb-4 text-black" />
    
                <label htmlFor="description" className="block mb-2">Description:</label>
                <textarea id="description" name="description" className="w-full border border-gray-300 rounded-md p-2 mb-4 text-black" />
    
                <label htmlFor="image" className="block mb-2">Image:</label>
                <input type="file" id="image" name="image" accept="image/*" className="mb-4" />
    
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Create Post</button>
            </form>
        </div>
    );   
}

export default CreatePost;
