const ConditionalRendering = ( {num} ) => {
return (
    <>
    {num && typeof num !== "string" && (
            <div>
                {num === 1 ? (
                    <p>Vrijednost je 1</p>

                ) : ( 
                    <p>Vrijednost nije 1 vec {num} </p>
            )}
            </div>
        )}
    
    </>
);
};

export default ConditionalRendering;