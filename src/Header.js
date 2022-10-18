const Header =({selectedTeam, teamMemberCount})=>{
    return(
        <header className="container">
            <div className="row justify-container-center mt-3 mb-4 ">
                <div>
                    <h1>Team Members Allocation</h1>
                    <h3>{selectedTeam} Has {teamMemberCount} {teamMemberCount===1? 'Member':'Members'} </h3>
                </div>
            </div>
        </header>
    )
}
export default Header