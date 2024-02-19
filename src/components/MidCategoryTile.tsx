export function MidCategoryTile({title, color}: {title: string, color: string}){
    return(
        <div className="RoundCenter" style={{borderRadius: '30vw',backgroundColor: color, width:'max-content'}}>
            <p style={{padding: '1vw 3vw', margin:0}}>{title}</p>
        </div>
    );
}