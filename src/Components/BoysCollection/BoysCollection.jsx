import BoysCollectionCard from "./BoysCollectionCard";


const BoysCollection = () => {
    return (
        <div className="flex gap-7 mt-7">
           <div className="flex-1">
                <h1 className="text-2xl font-semibold">For Girls</h1>
                <hr />
                <div className="mt-5">
                <BoysCollectionCard></BoysCollectionCard>
                </div>
            </div>

            <div className="flex-1">
                <img src="https://media.istockphoto.com/id/155445946/photo/teenage-boy-shopping.jpg?s=612x612&w=0&k=20&c=YQQa3HHvuank-cBHUPEH-y7K8c4ltNSRjGPVwzLeexc=" alt="" />
            </div>

        </div>
    );
};

export default BoysCollection;