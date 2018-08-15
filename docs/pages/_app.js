import React from 'react'
import App, { Container } from 'next/app'
import WithDoc from '../lib/with-doc'

export default class extends App {
  render() {
    let { Component, router } = this.props

    if (router.pathname.indexOf('/docs') > -1) {
      Component = WithDoc(Component)
    }

    return (
      <Container>
        <Component />
        <footer>&copy; Made With Zcool Front End</footer>
        <style jsx global>{`
          html {
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
              'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
            font-weight: 400;
            font-style: normal;
            font-size: 14px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }

          body {
            overflow-x: hidden;
            position: relative;
          }

          * {
            margin: 0;
            padding: 0;
            outline: none;
          }

          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }

          a {
            color: inherit;
            text-decoration: none;
          }

          ul,
          ol {
            list-style: none;
          }

          img {
            display: inline-block;
            vertical-align: top;
          }

          aside,
          footer,
          header,
          main,
          nav,
          section {
            display: block;
          }

          [tabindex='-1']:focus {
            outline: 0 !important;
          }

          hr {
            box-sizing: content-box;
            border: none;
            height: 4px;
            overflow: visible;
          }

          abbr[title],
          abbr[data-original-title] {
            text-decoration: underline;
            -webkit-text-decoration: underline dotted;
            text-decoration: underline dotted;
            cursor: help;
            border-bottom: 0;
          }

          table {
            border-collapse: collapse;
          }

          caption {
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            text-align: left;
            caption-side: bottom;
          }

          th {
            text-align: inherit;
          }

          label {
            display: inline-block;
          }

          button {
            border-radius: 0;
            outline: none;
          }

          button:focus {
            outline: none;
          }

          input,
          button,
          select,
          textarea {
            margin: 0;
            font-family: inherit;
            font-size: inherit;
            line-height: inherit;
          }

          button,
          input {
            overflow: visible;
          }

          button,
          select {
            text-transform: none;
          }

          button,
          html [type='button'],
          [type='reset'],
          [type='submit'] {
            -webkit-appearance: button;
          }

          button::-moz-focus-inner,
          [type='button']::-moz-focus-inner,
          [type='reset']::-moz-focus-inner,
          [type='submit']::-moz-focus-inner {
            padding: 0;
            border-style: none;
          }

          input[type='radio'],
          input[type='checkbox'] {
            box-sizing: border-box;
            padding: 0;
          }

          input[type='date'],
          input[type='time'],
          input[type='datetime-local'],
          input[type='month'] {
            -webkit-appearance: listbox;
          }

          textarea {
            overflow: auto;
            resize: vertical;
          }

          [type='number']::-webkit-inner-spin-button,
          [type='number']::-webkit-outer-spin-button {
            height: auto;
          }

          [type='search'] {
            outline-offset: -2px;
            -webkit-appearance: none;
          }

          [type='search']::-webkit-search-cancel-button,
          [type='search']::-webkit-search-decoration {
            -webkit-appearance: none;
          }

          ::-webkit-file-upload-button {
            font: inherit;
            -webkit-appearance: button;
          }

          template {
            display: none;
          }

          [hidden] {
            display: none !important;
          }

          footer {
            width: 100%;
            position: relative;
            text-align: center;

            color: #fff;
            height: 60px;
            line-height: 60px;
            background: #000;
          }

          #nprogress {
            pointer-events: none;
          }

          #nprogress .bar {
            background: #ea4335;
            position: fixed;
            z-index: 9999;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
          }

          #nprogress .peg {
            display: block;
            position: absolute;
            right: 0px;
            width: 100px;
            height: 100%;
            box-shadow: 0 0 10px #ea4335, 0 0 5px #ea4335;
            opacity: 1;
            transform: rotate(3deg) translate(0px, -4px);
          }
        `}</style>
      </Container>
    )
  }
}
