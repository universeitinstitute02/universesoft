import React, { useState } from 'react';
import useAxiosPublic from '../../../../hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Swal from 'sweetalert2';
import { Editor } from '@tinymce/tinymce-react'; // Import TinyMCE Editor

const AddProductRequest = () => {
    const getToken = localStorage.getItem("representativeToken");
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false);
    const [selectedProductId, setSelectedProductId] = useState(null);
    const [productExtraDes, setProductExtraDes] = useState(""); // State for TinyMCE content

    const config = {
        headers: {
            Authorization: getToken
        },
    };

    const fetchData = async () => {
        const [clients, products] = await Promise.all([
            axiosPublic.get('/allClientByRepresentative', config),
            axiosPublic.get('/all-product-category')
        ]);

        return {
            clients: clients.data.data,
            products: products.data.data
        };
    };

    const { data, isLoading, isError } = useQuery({
        queryKey: ['combinedData'],
        queryFn: fetchData
    });

    const clients = data?.clients || [];
    const products = data?.products || [];

    const handleProductChange = (e) => {
        setSelectedProductId(e.target.value);
    };

    const handleEditorChange = (content) => {
        setProductExtraDes(content); // Update the state with TinyMCE editor content
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;

        const client_id = form.client_id.value;
        const duraction = form.duraction.value;
        const product_id = form.product_id.value;

        const data = { client_id, product_id, duraction, productExtraDes }; // Include productExtraDes in the data
        console.log(data);

        try {
            axiosPublic.post(`/product-purchase-request`, data, config)
                .then(res => {
                    if (res) {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Data has been saved",
                            showConfirmButton: false,
                            timer: 1500
                        });

                        // Reset form and TinyMCE content
                        form.reset();
                        setProductExtraDes("");
                        setSelectedProductId(null);
                    }
                });
        } catch (error) {
            console.error("Error submitting form:", error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p className="text-center text-3xl font-bold my-4">Product Request</p>
                <div className="grid lg:grid-cols-3 w-10/12 mx-auto border p-3 rounded-lg mb-5 justify-center gap-4">
                    {/* Client Selection */}
                    <div>
                        <select name='client_id' className="select w-full">
                            <option disabled selected>Pick your Client</option>
                            {
                                clients?.map(client => (
                                    <option value={client._id} key={client._id}>{client?.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    {/* Product Selection */}
                    <div>
                        <select
                            name='product_id'
                            className="select w-full"
                            onChange={handleProductChange} // Handle product change
                        >
                            <option disabled selected>Pick your Product</option>
                            {
                                products?.map(product => (
                                    <option value={product._id} key={product._id}>{product?.productName}</option>
                                ))
                            }
                        </select>
                    </div>

                    {/* Month Input */}
                    <div>
                        <input
                            type="number"
                            name="duraction"
                            className="w-full px-4 py-[10px] border rounded-md"
                            placeholder='Enter duration in month'
                        />
                    </div>
                </div>

                {/* TinyMCE Product Extra Description */}
                <div className="my-4">
                    <h3 className="text-lg font-semibold">Product Extra Description</h3>
                    <Editor
                        apiKey="atnary0we9a0nuqjzgtnpxyd0arpbwud7ocxkjxqjtaab3nm" // Add your TinyMCE API key here (if needed)
                        value={productExtraDes}
                        init={{
                            height: 400,
                            menubar: false,
                            plugins: ['advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview', 'anchor', 'searchreplace', 'wordcount'],
                            toolbar: 'undo redo | formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist | link image | code | fontsizeselect | h1 h2 h3 h4 h5 h6',
                            block_formats: 'Paragraph=p; Heading 1=h1; Heading 2=h2; Heading 3=h3; Heading 4=h4; Heading 5=h5; Heading 6=h6',
                        }}
                        onEditorChange={handleEditorChange}
                    />
                </div>

                {/* Submit Button */}
                <div className="w-1/4 mx-auto">
                    <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md">
                        {loading ? "Uploading..." : "Submit"}
                    </button>
                </div>
            </form>

            {/* Display product data when a product is selected */}
            {selectedProductId && (
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Selected Product Details:</h3>
                    {/* Render data for selected product */}
                    <div className="p-4 bg-gray-100 rounded-lg">
                        <p><strong>Product ID:</strong> {selectedProductId}</p>
                        <p><strong>Product Name:</strong> {products.find(product => product._id === selectedProductId)?.productName}</p>
                        <p><strong>Representative Percentage:</strong> {products.find(product => product._id === selectedProductId)?.representativePercentange}%</p>
                        <p><strong>Product Price :</strong> {products.find(product => product._id === selectedProductId)?.price}  </p>
                        <p><strong>Product Description :</strong> {products.find(product => product._id === selectedProductId)?.package.map((item,i)=>{
                            return(
                                <div key={i?._id} >
                                    <h1>Total Page : {item?.totalPage} </h1>
                                    <h1>Features : {item?.features} </h1>
                                    <h1>Delivery Time : {item?.deliveryTime} </h1>
                                </div>
                            )
                        }) }  </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddProductRequest;
