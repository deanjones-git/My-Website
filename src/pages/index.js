import React, { useState } from "react"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"
import "../styles/global.css"
import WorkItem, { Work } from "../components/WorkItem"
import { graphql } from "gatsby"

const true_mobile = `@media (max-width: 400px)`

const Layout = styled.div`
	color: white;
`

const Intro = styled.div`
	margin: 0 auto;
	padding: 0 20px;
	max-width: 1200px;

	${true_mobile} {
		padding: 0 10px;
	}
`

const Header = styled.header`
	width: 100%;
	display: flex;
	justify-content: space-between;
`

const FadeWordDiv = styled(Fade)`
	width: 70%;
	display: flex;
	justify-content: space-between;
`

const FadeWord = styled.div`
	display: flex;
	align-items: flex-start;
	font-family: Lato-Bold;
	font-size: 20px;
	${true_mobile} {
		font-size: 16px;
	}
`

const Body = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	padding: 0 20px;
	${true_mobile} {
		font-size: 10px;
		padding: 0 10px;
	}
`

const H1 = styled.h1`
	text-align: ${({center}) => (center ? 'center' : 'left')};
	font-family: Lato-Bold;
	font-size: 28px;
	${true_mobile} {
		font-size: 20px;
	}
`

const H2 = styled.h2`
	text-align: ${({center}) => (center ? 'center' : 'left')};
	font-family: Lato;
	font-size: 20px;
	line-height: 140%;
	${true_mobile} {
		font-size: 12px;
	}
`

const A = styled.a`
	color: white;
	text-decoration: none;
	border-bottom: 2px solid #c07cfc;
	&:hover {
		color: #c07cfc;
	}
`

const Spacer = styled.div`
	width: 100%;
    height: ${({ y }) => `${y}`}px;
`

export default function Home({ data }) {

  const [view, setView] = useState(true);

  setTimeout(() => {
  	  setView(false)
  }, 4000)

  return (
	<Layout>
		<Intro>
			<Header>
					<FadeWordDiv when={view}>
						<FadeWord>
							{"developer".split("").map((c, index) => {
								const cDelay = index*100
								return index % 2 ? <Fade up delay={cDelay}>{c}</Fade> : <Fade down delay={cDelay}>{c}</Fade>
							})}
						</FadeWord>
						<FadeWord>
							{"scientist".split("").map((c, index) => {
								const cDelay = 1000 + index*100
								return index % 2 ? <Fade up delay={cDelay}>{c}</Fade> : <Fade down delay={cDelay}>{c}</Fade>
							})}
						</FadeWord>
						<FadeWord>
							{"creator".split("").map((c, index) => {
								const cDelay = 2000 + index*100
								return index % 2 ? <Fade up delay={cDelay}>{c}</Fade> : <Fade down delay={cDelay}>{c}</Fade>
							})}
						</FadeWord>
					</FadeWordDiv>
					<Fade right delay={4500}>
						<H2>dean jones</H2>
					</Fade>
			</Header>
		</Intro>
		<Body>
			<H1>Welcome! I'm Dean Jones &mdash; a San Jose, CA native and 2nd-year UCLA Computer Science & Engineering major.</H1>
			<Spacer y={8}/>
			<H2>Connect with me on <A target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dean-c-jones/">LinkedIn</A>, check out my <A target="_blank" rel="noopener noreferrer" href="https://github.com/deanjones-git">Github</A>, or shoot me an <A target="_blank" rel="noopener noreferrer" href="mailto:deanjones2001@gmail.com">email</A>.</H2>
			<Spacer y={24}/>
			<H1>Here's some of my work. Click for more details!</H1>
			<Work>
				{
					data.allProjects.nodes.map(node => (
						<WorkItem data={node} />
					))
				}
			</Work>
			<Spacer y={24}/>
		</Body>
	</Layout>
  )
}


export const query = graphql`
	query {
		allProjects(sort: { fields: [Order], order: ASC }) {
			nodes {
				Name
				Image
				Summary
				Order
			}
		}
	}
`
