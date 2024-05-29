  
let numberofNFTs=0; // create a variable to hold your NFT's
// this function will take in some values as parameters, create an
function mintNFT(name,age,gender,degree) {
    const nft={
    name:name,
    age:age,
    gender:gender,
    degree:degree
    };
    numberofNFTs++;
    return nft;
    }
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
const nftarray=[];

    const firstNFT=mintNFT("akshat",21,"male","B.tech");
    nftarray.push(firstNFT);
    
    
    const secondNFT=mintNFT("Ankit",28,"Male","B.Sc");
    nftarray.push(secondNFT);

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFT() { 
    for( let i=0;i<nftarray.length;i++) {
    const nft=nftarray[i];
    console.log("Name:"+nft.name);
    console.log("age:"+nft.age);
    console.log("gender:"+nft.gender);
    console.log("degree:"+nft.degree);
    console.log("__________");
        } 

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log( "Total number of NFTs =" +numberofNFTs);
    }
// call your functions below this line
listNFT();
getTotalSupply();












