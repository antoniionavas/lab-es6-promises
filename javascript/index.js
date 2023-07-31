// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
  getInstruction("mashedPotatoes", 0, (step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 1, (step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 2, (step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 3, (step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  }, (error) => console.log(error));
  
  getInstruction("mashedPotatoes", 4, (step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
  }, (error) => console.log(error));



// Iteration 1 - using callbacks
// ...

getInstruction(0,(step1) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step1}</li>`;
  getInstruction(1,(step2) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step2}</li>`;
  getInstruction(2,(step3) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step3}</li>`;
  getInstruction(3,(step4) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step4}</li>`;
  getInstruction(4,(step5) => {
    document.querySelector("#mashedPotatoes").innerHTML += `<li>${step5}</li>`;
    document.querySelector("#mashedPotatoesImg").removeAttribute("hidden");
}, (error) => { console.log(error)})

}, (error) => { console.log(error)})

}, (error) =>{ console.log(error)})

}, (error) => {console.log(error)})

}, (error) => {console.log(error)});

// Iteration 2 - using promises
// ...

getInstruction (0) 

.then((step1) => {
  document.querySelector("#steak").innerHTML += `<li>${step1}</li>`;
  return getInstruction(1);
})

.then((step2) => {
  document.querySelector("#steak").innerHTML += `<li>${step2}</li>`;
  return getInstruction(2);
})

.then((step3) => {
  document.querySelector("#steak").innerHTML += `<li>${step3}</li>`;
  return getInstruction(3);
})

.then((step4) => {
  document.querySelector("#steak").innerHTML += `<li>${step4}</li>`;
  return getInstruction(4);
})

.then((step5) => {
  document.querySelector("#steak").innerHTML += `<li>${step5}</li>`;
  return getInstruction(5);
})

.then((step6) => {
  document.querySelector("#steak").innerHTML += `<li>${step6}</li>`;
  return getInstruction(6);
})

.then((step7) => {
  document.querySelector("#steak").innerHTML += `<li>${step7}</li>`;
  return getInstruction(7);
})

.then((step8) => {
  document.querySelector("#steak").innerHTML += `<li>${step8}</li>`;
})

.catch((error) => {
  console.log("error", error)
})



// Iteration 3 using async/await
// ...

async function makeBroccoli() {
  try {
    const response1 = await getInstruction(0)
    document.querySelector("#broccoli").innerHTML += `<li>${response1}</li>`;

    const response2 = await getInstruction(1)
    document.querySelector("#broccoli").innerHTML += `<li>${response2}</li>`;

    const response3 = await getInstruction(2)
    document.querySelector("#broccoli").innerHTML += `<li>${response3}</li>`;

    const response4 = await getInstruction(3)
    document.querySelector("#broccoli").innerHTML += `<li>${response4}</li>`;

    const response5 = await getInstruction(4)
    document.querySelector("#broccoli").innerHTML += `<li>${response5}</li>`;

    const response6 = await getInstruction(5)
    document.querySelector("#broccoli").innerHTML += `<li>${response6}</li>`;

    const response7 = await getInstruction(6)
    document.querySelector("#broccoli").innerHTML += `<li>${response7}</li>`;
  }

  catch(error) {
    console.log(error)
  }
}



// Bonus 2 - Promise all
// ...