const campaigns=[{title:'City Blood Drive',date:'2025-12-20',location:'Community Hall'},{title:'College Donation Camp',date:'2025-12-10',location:'Govt. College'}];
let container=document.getElementById("campaign-list");
campaigns.forEach(c=>{
 let div=document.createElement("div");
 div.className="campaign-card";
 div.innerHTML=`<h3>${c.title}</h3><p><strong>Date:</strong>${c.date}</p><p><strong>Location:</strong>${c.location}</p>`;
 container.appendChild(div);
});
function saveDonation(){
 let date=document.getElementById("donationDate").value;
 if(!date){alert("Select date!");return;}
 localStorage.setItem("lastDonation",date);
 calc();
}
function calc(){
 let last=localStorage.getItem("lastDonation");
 if(!last)return;
 let d=new Date(last);d.setMonth(d.getMonth()+3);
 document.getElementById("nextDonation").innerText="Next Eligible: "+d.toDateString();
}
calc();
function scrollToDonate(){document.getElementById("campaigns").scrollIntoView({behavior:"smooth"});}
