const hre = require("hardhat");

async function main() {
  const currentTimeStampInSeconds = Math.round(Date.now() / 1000);
  const ONE_YEAR_IN_SECONDS = 365 * 24 * 60 * 60;
  const unlockedTime = currentTimeStampInSeconds + ONE_YEAR_IN_SECONDS;

  console.log(currentTimeStampInSeconds);
  console.log(ONE_YEAR_IN_SECONDS);
  console.log(unlockedTime);

  //Saving the value of 1 ETH, function converts it to wei (<gwei even)
  const lockedAmount = hre.ethers.utils.parseEther("1");

  const MyTest = await hre.ethers.getContractFactory("MyTest");
  const myTest = await MyTest.deploy(unlockedTime, {value: lockedAmount});

  await myTest.deployed();

  console.log('Contract contain 1 ETH & address: ${myTest.address}');
}

main().catch((error)=>{
  console.log(error);
  process.exitCode = 1;
})
