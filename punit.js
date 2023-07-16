class NFT {
    constructor( colour, food , age  , Group ) {
this.branch = colour;
this.height = food;
this.section = age ;
this.age = Group;
    }
  }
  
  const nfts = [];
  let count = 0;
  
  function mintNFT(colour, food , age, Group) {
    const nft = new NFT(colour, food , age , Group);
    nfts.push(nft);
    count++;
  }
  
  function listNFTs() {
    console.log("The list of total NFTs:\n");
    for (let i = 0; i < count; i++) {
      console.log(nfts[i]);
    }
  }
  
  function getTotalSupply() {
    console.log("The total number of NFTs created by the user:");
    console.log(count);
  }
  
  mintNFT("RED", "PIZZA", "19", "A");
  mintNFT("BLUE", "BURGER", "18", "B");
  
  listNFTs();
  getTotalSupply();