import Name from "./Name";

function Header() {
    return <div>
        <h3>My Projects</h3>
        <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>
        <Name name="Steve" dept="HR" />
        <Name name="John" dept="IT" />
    </div>
}

export default Header;