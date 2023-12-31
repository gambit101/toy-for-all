
const Story = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 bg-[#404258]  gap-6 justify-center mt-5 p-10 rounded-xl mb-10' data-aos='fade-right'>
            <div>
                <h2 className='text-center my-4'><span className='text-white text-4xl font-bold'>About Our Store</span></h2>
                <hr />
                <p className='text-gray-300 mt-6'>To help the business grow, Veaceslav participated in the 2021 grants competition announced by the “EU4Moldova: Focal Region” programme, funded by the EU and implemented by UNDP and UNICEF. As a result, he received approximately €25,000 for the purchase of various equipment installed in the restaurant, warehouse, bakery, and semi-finished products production point.

                    Currently, “Augusto” is endowed with high-performance equipment: electric ovens, fryers, refrigerated display cabinets, sinks, etc.

                    The popularity of the place is on the rise, thanks to the special Italian-style pizza-making technology. Augusto’s pizza dough is made using a unique technology and the cheese and filling are provided by local producers.



                </p>
            </div>
            <div>
                <img style={{ width: '500px' }} className='rounded-xl ms-2' src="https://images.unsplash.com/photo-1497124401559-3e75ec2ed794?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VwZXJoZXJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
            </div>
        </div>
    );
};

export default Story;