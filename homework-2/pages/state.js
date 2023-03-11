export function State({ residence }) {

    return (
        <>
            <div style={{ border: '5px outset #8b00fc' }}>
                {
                    Object.keys(residence).map((item, i) => (
                        <div key={i} style={{ color: 'black' }}>{item} {residence[item]} 명 거주</div>
                    ))
                }
            </div>
        </>
    );
}

export default State;