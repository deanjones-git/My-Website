import React, { useState } from "react"
import styled from "@emotion/styled"
import { parseImageUrl } from "notabase/src/utils"
import Modal from "react-modal"
import { AiOutlineClose } from "react-icons/ai"
import HoverVideoPlayer from "react-hover-video-player"
import ti_rslk from "../assets/videos/ti_rslk.mp4"
import parse from "html-react-parser"
import { isMobile } from "react-device-detect"

const mobile = `@media (max-width: 800px)`
const true_mobile = `@media (max-width: 400px)`

export const Work = styled.div`
	display: grid;
	grid-template-columns: auto auto auto;
	grid-gap: 20px;

	${mobile} {
		grid-template-columns: auto auto;
	}

	${true_mobile} {
		grid-template-columns: auto;
	}
`

const WorkDiv = styled.div`
	text-align: center;
	margin-bottom: 8px;
	padding: 10%;
	position: relative;
	border: 2px solid white;
	border-radius: 8px;


	&:hover {
		& > img {
			webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
			filter: grayscale(100%);
		}
		& > div {
			visibility: visible;
		}
	}
`

const Title = styled.div`
	top: 10px;
	left: 10px;
	position: absolute;
	visibility: hidden;
	color: white;
	font-family: Alata;
`

const Img = styled.img`
	line-height: 0;
	overflow: hidden;
	width: 80%;
	display: inline-block;
	vertical-align: middle;
`

const Helper = styled.span`
	display: inline-block;
    height: 100%;
    vertical-align: middle;
`

const H4 = styled.h4`
	color: white;
	font-family: Alata;
	font-size: 18px;
`

const ModalImg = styled.img`
	display: block;
	margin: 0 auto;
	max-width: 80%;
	max-height: 400px;
`

const P = styled.p`
	font-family: Rubik;
	line-height: 140%;
	font-size: 16px;
	& > a {
		color: white;
		text-decoration: none;
		border-bottom: 2px solid #c07cfc;
		&:hover {
			color: #c07cfc;
		}
	}
`

const HoverBubble = styled.div`
	position: relative;
	background: #1F1F1F;
	border-radius: 10px;
	padding: 0 12px;
	width: 200px;
	margin: 0 auto;
	margin-bottom: 18px;
	${mobile} {
		padding: 0;
		margin-bottom: 12px;
		border-radius: 6px;
	}
	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		width: 0;
		height: 0;
		border: 8px solid transparent;
		border-top-color: #1F1F1F;
		border-bottom: 0;
		margin-left: -8px;
		margin-bottom: -8px;
	}
`

const HoverP = styled.p`
	font-family: Rubik;
	font-size: 16px;
	line-height: 250%;

	text-align: center;
	color: white;
	${mobile} {
		font-size: 12px;
	}
`

const IconDiv = styled.div`
	display: flex;
	flex-direction: row-reverse;
	margin-bottom: 20px;
`

const customStyles = {
  content : {
	maxWidth			  : "700px",
	top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
	background			  : 'black',
	color				  : 'white',
	borderRadius		  : '20px',
  }
};

export default function WorkItem({ data }) {
	const { Name, Image, Summary } = data
	let imageURL = Image && parseImageUrl(Image[0], 1000)
	const [modalOpen, setModalOpen] = useState(false)

	function toggleModal(e) {
		e.stopPropagation()
		setModalOpen(!modalOpen)
	}

	return (
		<WorkDiv onClick={e => toggleModal(e)}>
			<Modal
				isOpen={modalOpen}
				onRequestClose={e => toggleModal(e)}
				style={customStyles}
				>
				<IconDiv>
					<AiOutlineClose size={24} onClick={e => toggleModal(e)}/>
				</IconDiv>
				{!Name.match("Self-Driving TI-RSLK") && !isMobile &&
					<ModalImg src={imageURL}/>
				}
				{Name.match("Self-Driving TI-RSLK") && !isMobile &&
					<>
					<HoverBubble>
						<HoverP>Hover to see it in action!</HoverP>
					</HoverBubble>
					<HoverVideoPlayer
						videoSrc={ti_rslk}
						restartOnPaused={true}
						loop={false}
						style={{display: "block", margin: "0 auto", width: "100%", maxWidth: "350px"}}
					/>
					</>
				}
				<H4>{Name}</H4>
				<P>{parse(Summary)}</P>

			</Modal>
			<Helper />
			<Img src={imageURL}/>
			<Title>
				{Name}
			</Title>
		</WorkDiv>
	)
}