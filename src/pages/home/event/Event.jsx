
const Event = () => {
    return (
        <div>
            <h2 className="text-center my-8 text-4xl font-bold">Upcoming Events</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1472457897821-70d3819a0e24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFjdGlvbiUyMGZpZ3VyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Show your collection</h2>
                        <p>You have to bring your toy collection and display it. Our judges will give you start based on your collection. The winner will receive a cash prize of 50$</p>
                        
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cXVpenxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Superhero quiz competition</h2>
                        <p>You can participate in a quiz competition and win a free action figure and a free costume</p>
                        
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://images.unsplash.com/photo-1605663864774-748f5f858a08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvc3BsYXl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-3xl font-bold">Cosplay as your favorite hero</h2>
                        <p>You can cosplay as your favorite hero and win a free gift voucher from our store and many more</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;