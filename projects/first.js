// create a variable to hold your NFT's
const NFTCOLLECT=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name,department,designation,locationofoffice) {
   const nft={
      name:name,
      department: department,
      designation:designation,
      locationofoffice:locationofoffice,
      
   };
   NFTCOLLECT.push(nft);
}




// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
   NFTCOLLECT.forEach((nft,index)=>{
   console.log('Corporate NFT :'.concat(index + 1));
   console.log('name'.concat(nft.name));
   console.log('Department:'.concat(nft.department));
   console.log('designation:'.concat(nft.designation));
   console.log('Office Location:'.concat(nft.locationofoffice));
   console.log('');
   
   
  
   });
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
   return NFTCOLLECT.length;
}

// call your functions below this line
mintNFT('bhumika', 'Engineering', 'Software Engineer', 'chandigrah', 2019);
mintNFT('devika', 'HR', 'hr manager', 'delhi', 2024);
mintNFT('nidhi', 'marketing', 'marketing head', 'mumbai', 2020);

listNFTs();
console.log('Total NFTs minted: ' + getTotalSupply());