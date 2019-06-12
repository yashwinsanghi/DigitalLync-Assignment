function insert(reaction)
{
    // Read username
    var user=document.getElementById('u_name').value;
    //console.log("user = ",user);
    // Retrieve the reactions recorded till date
    var keys=Object.keys(localStorage);
    //console.log("Reaction List length =",keys.length);
    // if it is the first reaction 
    if(keys.length==0)
    {
        //console.log("First Record Entry");
        let usernames=[];
        //console.log("usernames = ",usernames);
        usernames.push(user);
        //console.log(" Updated usernames = ",usernames);
        localStorage.setItem(reaction,JSON.stringify(usernames));
        return;
    }
    // if the reaction is not recorded till date
    // but there are other reactions recorded
    if(keys.indexOf(reaction)==-1)
    {
        console.log(" New reaction entry");
    // Iterate over the reaction recorded and check if 
    //username already exists
        for(let i=0;i<keys.length;i++)
        {
            let bufferUser=[];
            console.log(" Declared bufferUser = ",bufferUser);
            //Buffer user is used to store userlist of reactions
            bufferUser=JSON.parse(localStorage.getItem(keys[i]));
            console.log("bufferUser = ",bufferUser);
            console.log("bufferUser length =",bufferUser.length)
            // If there are no elements in the buffer check the next reaction
            if(bufferUser.length==0)
            {
                continue;
            }
            // if the username is not present in the list
            else if(bufferUser.indexOf(user)==-1)
            {
                console.log("bufferUser.indexOf(user) = ",bufferUser.indexOf(user));
                continue;
            }
            // if the element is present
            else
            {
                // Find the index of the username
                console.log("index of user = ",bufferUser.indexOf(user));
                //delete the username from the reaction userlist
                bufferUser.splice(bufferUser.indexOf(user),1);
                console.log(" Modified bufferUser = ",bufferUser);
                //Update the userlist to local storage
                localStorage.setItem(keys[i],JSON.stringify(bufferUser));
                //Add the username to the required reaction
                //requiredUser will store the userlist of required reaction
                let requiredUser=[];
                console.log("Declared requiredUser =",requiredUser);
                // Retrieve the userlist with the reaction required
                requiredUser=JSON.parse(localStorage.getItem(reaction));
                console.log("Retrieved requiredUsers = ",requiredUser);
                //if the required userlist is empty
                if(requiredUser==null)
                {
                    console.log("Create the array");
                    requiredUser=[];
                    console.log("requiredUser =",requiredUser);
                    requiredUser.push(user);
                    console.log("Updated requiredUser = ",requiredUser);
                    //Update the localStorage
                    localStorage.setItem(reaction,JSON.stringify(requiredUser));
                    return;
                }
                else
                {
                    // Push the user to user list
                    if(requiredUser.indexOf(user)==-1)
                    { 
                        requiredUser.push(user);
                        console.log("New requiredUser = ",requiredUser);
                    // Update the localStorage
                        localStorage.setItem(reaction,JSON.stringify(requiredUser));
                        return;
                    }
                    else
                    {
                        alert("You already "+reaction+"it");
                    }
                }
            }
        }
    }
    // if the reaction is recored .
    console.log("WHEN THERE IS A SECOND ELEMENT BEING INSERTED");
    keys.splice(keys.indexOf(reaction),1)
    for(let i=0;i<keys.length;i++)
    {
        let bufferUser=[];
        console.log("Declared bufferUser = ",bufferUser);
        bufferUser=JSON.parse(localStorage.getItem(keys[i]));
        console.log("Retrieved bufferUser =",bufferUser);
        // if the bufferUser is empty skip this reaction
        if(bufferUser.length==0)
        {
            continue;
        }
        // if the bufferuser doesnot have the username skip it 
        else if(bufferUser.indexOf(user)==-1)
        {
            continue;
        }
        // if the bufferuser has the username 
        else
        {
            // Find the index of the username
            console.log("index of user = ",bufferUser.indexOf(user));
            //delete the username from the reaction userlist
            bufferUser.splice(bufferUser.indexOf(user),1);
            console.log(" Modified bufferUser = ",bufferUser);
            //Update the modified userlist to local storage
            localStorage.setItem(keys[i],JSON.stringify(bufferUser));
            //Add the username to the required reaction
            //requiredUser will store the userlist of required reaction
            let requiredUser=[];
            console.log("Declared requiredUser =",requiredUser);
            // Retrieve the userlist with the reaction required
            requiredUser=JSON.parse(localStorage.getItem(reaction));
            console.log("Retrieved requiredUsers = ",requiredUser);
            //if the required userlist is empty
            if(requiredUser==null)
            {
                console.log("Create the array");
                requiredUser=[];
                console.log("requiredUser =",requiredUser);
                requiredUser.push(user);
                console.log("Updated requiredUser = ",requiredUser);
                //Update the localStorage
                localStorage.setItem(reaction,JSON.stringify(requiredUser));
                return;
            }
            else
            {
                if(requiredUser.indexOf(user)==-1)
                {
                // Push the user to user list 
                    requiredUser.push(user);
                    //console.log("New requiredUser = ",requiredUser);
            // Update the localStorage
                    localStorage.setItem(reaction,JSON.stringify(requiredUser));
                    return;
                }
                else
                {
                    alert("You already "+reaction+"it");
                }
            }
        }
    }
    let requiredUser=[];
    //console.log("Declared required users ",requiredUser);
    requiredUser=JSON.parse(localStorage.getItem(reaction));
    //console.log("Retrieved required userlist =",requiredUser);
    if(requiredUser==null)
    {
        //console.log("Create the array");
        requiredUser=[];
        //console.log("requiredUser =",requiredUser);
        requiredUser.push(user);
        //console.log("Updated requiredUser = ",requiredUser);
        //Update the localStorage
        localStorage.setItem(reaction,JSON.stringify(requiredUser));
        return;
    }
    else
    {
        if(requiredUser.indexOf(user)==-1)
        {
        // Push the user to user list 
            requiredUser.push(user);
            //console.log("New requiredUser = ",requiredUser);
        // Update the localStorage
            localStorage.setItem(reaction,JSON.stringify(requiredUser));
            return;
        }
        else
        {
            alert("You already "+reaction+" it");
        }
     }
}
function display(reaction)
{
    event.preventDefault();
    let usernames=[];
    var displayText=document.getElementById(reaction);
    displayText.innerHTML="<b>"+reaction+"</b><br>";
    usernames=JSON.parse(localStorage.getItem(reaction));
    if(usernames==null)
    {
        document.getElementById(reaction+'count').innerHTML=0;
        return;
    }
    else
    {
        document.getElementById(reaction+'count').innerHTML=usernames.length;
        for(var i=0;i<10 && i<usernames.length;i++)
        {
            displayText.innerHTML+="<a href='&#35' style='color:white; text-decoration:none;'>"+usernames[i]+"</a><br>";
        }
        i=(usernames.length)-i;
        if(i>10)
        {
            displayText.innerHTML += " And "+ i.toString() +" more";
        }
    } 
}