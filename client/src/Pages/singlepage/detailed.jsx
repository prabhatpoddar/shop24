import styled from "styled-components";

export const DetailsMainDiv = styled.div`
  // border: 1px solid black;
 
`;

export const ImageContainer = styled.div`
  
  div {
    width: 100%;
    /* border: 1px solid; */
    img {
      width: 90%;
      height: 80%;
    }
  }
`;

export const ImgDiv = styled.div``;

export const Img = styled.img`
  // transition: 0.9s all ease-in-out;
  // &:hover {
  //   transform: scale(1.1);
  // }
`;
// subdetails

export const SubDetailsDiv = styled.div`
  width: 80%;
`;
export const WishDiv = styled.div`
  border: 0.3px solid lightgray;
  width: 160px;
  display: flex;
  justify-content: center;
  border-radius: 4px;
  gap: 10px;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  &:hover{
    border:1px solid
  }
`;

export const BagDiv = styled.div`
  width: 200px;
  display: flex;
  height:50px;
  border-radius: 4px;
  background-color: #e7396a;
  color: white;
  justify-content: center;
  gap: 10px;
  align-items: center;
  cursor: pointer;
&:hover{
  visibility: 0.5%;
}
`;

export const SizesDIv = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  font-size: 18px;
  font-weight:480;
  border-radius: 50%;
  border: 1px solid lightgray;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  cursor: pointer;
  &:hover {
    border:1px solid #e7396a
  }
`;

export const RatingDiv = styled.div`
display: flex;
border: 0.3px solid lightgray;
width:200px;
height:40px;
padding:15px;
margin-bottom: 15px;
font-size:16px;
gap:10px;
cursor: pointer;
         &:hover{
           border: 1px solid;
         }   
`