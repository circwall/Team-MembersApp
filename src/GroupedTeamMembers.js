import { useState } from "react"

const GroupedTeamMembers =({ employees, selectedTeam, setTeam })=>{
 const [groupedemployees,setGroupedData] = useState(groupedTeamMembers());

 function groupedTeamMembers(){
    var team =[];

    let teamAMembers = employees.filter((employee)=>employee.teamName==='TeamA');
    let teamA = { team: 'TeamA', 
    members:teamAMembers, collapsed:selectedTeam==="TeamA"?false:true};
    team.push(teamA)

    let teamBMembers = employees.filter((employee)=>employee.teamName==='TeamB');
    let teamB = { team: 'TeamB',
    members:teamBMembers, collapsed:selectedTeam==="TeamB"?false:true};
    team.push(teamB)

    let teamCMembers = employees.filter((employee)=>employee.teamName==='TeamC');
    let teamC = { team: 'TeamC', 
    members:teamCMembers, collapsed:selectedTeam==="TeamC"?false:true};
    team.push(teamC)

    let teamDMembers = employees.filter((employee)=>employee.teamName==='TeamD');
    let teamD = { team: 'TeamD', 
    members:teamDMembers, collapsed:selectedTeam==="TeamD"?false:true};
    team.push(teamD)

    console.log(team)
    return team;
    
 }
 function handleTeamClick(event){
    var transformedGroupedData = groupedemployees.map((groupedData) => 
    groupedData.team===event.currentTarget.id ?{...groupedData,collapsed:!groupedData.collapsed}
    :groupedData);

    setGroupedData(transformedGroupedData);
    setTeam(event.currentTarget.id);
}


 return(
    <main className="container">
        {
            groupedemployees.map((item)=>{
                return(
                    <div key={item.team} className="card mt-2" 
                    style={{cursor:"pointer"}}>
                        <h4 className=" card-header text-secondary bg-white" id={item.team} onClick={handleTeamClick}>
                        Team Name: {item.team}
                        </h4>
                        <div id={"collapse_" + item.team} className={item.collapsed===true? "collapse":""}>
                            <hr/>
                            {
                                item.members.map((member)=>
                                {
                                    return(
                                        <div className="mt-2">
                                            <h5 className="card-title">
                                                <span className="text-dark">Full Name: {member.fullName}</span>
                                            </h5>
                                            <p>Designatiion: {member.designation}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            })
        }
    </main>
)

}
export default GroupedTeamMembers


