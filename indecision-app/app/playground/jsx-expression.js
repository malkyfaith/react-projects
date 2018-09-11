let user = {
    name: 'Malkeet',
    age: 25,
    location: 'Sydney'
}

function getLocation(loc) {
    if(loc) return <p>Location: {loc}</p>;
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name: 'Anonymous'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
)