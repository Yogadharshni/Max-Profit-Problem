const hisWishes=(value)=>{
    let output = []
    const ideas = [{name:'T', earning:1500, developmentTime:5}, {name:'P', earning:1000, developmentTime:4}, {name:'C', earning:3000, developmentTime:10}]
    for(let i = 0; i<ideas.length; i++){
        let idea = ideas[i]
        if(value.time < idea.developmentTime){
            continue
        }else{
            let noOfidea = parseInt(value.time / idea.developmentTime)
            let totalinitialTime = 0
            let devTime  = 0
            for(let i = 1; i<= noOfidea; i++){
                let initialTime = (value.time - devTime ) - idea.developmentTime
                totalinitialTime += initialTime
                devTime += idea.developmentTime
            }
            let totalEarning = totalinitialTime * idea.earning
            if(totalEarning == value.earning){
                let solution = {'T':0, 'P':0, 'C':0}
                solution[idea.name] = noOfidea
                output.push(solution)
            }
        }
    }
    console.log(output)
    return output
}

const firstTestcase={
    time: 7,
    earning:3000
}
const secondTestcase={
    time: 8,
    earning:4500
}
const thirdTestcase={
    time: 13,
    earning:16500
}
const time=[5,4,10]
const earnings=[1500,1000,3000]

hisWishes(firstTestcase)
hisWishes(secondTestcase)
hisWishes(thirdTestcase)