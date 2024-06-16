function MyNavbar() {

    // : list items to show in the nav bar
    let list = ["Add Content", "Edit Content", "View Content"]

    // : return the nav bar
    return (
        <>
            <ul className="nav nav-tabs justify-content-center">
                {
                    list.map((item, index) => {
                        return (
                            <li className="nav-item" key={index}>
                                <a className="nav-link" href="#">{item}</a>
                            </li>
                        )
                    })
                }               
            </ul>
        </>
    )
}

export default MyNavbar