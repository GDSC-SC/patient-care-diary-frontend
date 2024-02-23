export function Modal({isOpen, closeModal, children}: {isOpen:boolean, closeModal: ()=>void, children: any}){
    
    return(
        <div style={{display: isOpen ? "block" : "none"}}>
            <div
                style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                backgroundColor: "rgba(0, 0, 0, 0.35)",
                }}
            />
        <div
            style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 'fit-content',
            borderRadius: '10vw',
            overflowY: "auto",
            backgroundColor: "white",
            }}
        >
            <div>{children}</div>
      </div>
    </div>
    );

}