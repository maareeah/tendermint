(window.webpackJsonp=window.webpackJsonp||[]).push([[191],{803:function(e,t,a){"use strict";a.r(t);var o=a(1),n=Object(o.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-an-application-in-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-application-in-go"}},[e._v("#")]),e._v(" Creating an application in Go")]),e._v(" "),a("h2",{attrs:{id:"guide-assumptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guide-assumptions"}},[e._v("#")]),e._v(" Guide Assumptions")]),e._v(" "),a("p",[e._v("This guide is designed for beginners who want to get started with a Tendermint\nCore application from scratch. It does not assume that you have any prior\nexperience with Tendermint Core.")]),e._v(" "),a("p",[e._v('Tendermint Core is a service that provides a Byzantine Fault Tolerant consensus engine\nfor state-machine replication. The replicated state-machine, or "application", can be written\nin any language that can send and receive protocol buffer messages in a client-server model.\nApplications written in Go can also use Tendermint as a library and run the service in the same\nprocess as the application.')]),e._v(" "),a("p",[e._v("By following along this tutorial you will create a Tendermint Core application called kvstore,\na (very) simple distributed BFT key-value store.\nThe application will be written in Go and"),a("br"),e._v("\nsome understanding of the Go programming language is expected.\nIf you have never written Go, you may want to go through "),a("a",{attrs:{href:"https://learnxinyminutes.com/docs/go/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn X in Y minutes\nWhere X=Go"),a("OutboundLink")],1),e._v(" first, to familiarize\nyourself with the syntax.")]),e._v(" "),a("p",[e._v("Note: Please use the latest released version of this guide and of Tendermint.\nWe strongly advise against using unreleased commits for your development.")]),e._v(" "),a("h3",{attrs:{id:"built-in-app-vs-external-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#built-in-app-vs-external-app"}},[e._v("#")]),e._v(" Built-in app vs external app")]),e._v(" "),a("p",[e._v("On the one hand, to get maximum performance you can run your application in\nthe same process as the Tendermint Core, as long as your application is written in Go.\n"),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos SDK"),a("OutboundLink")],1),e._v(" is written\nthis way.\nIf that is the way you wish to proceed, use the "),a("RouterLink",{attrs:{to:"/tutorials/go-built-in.html"}},[e._v("Creating a built-in application in Go")]),e._v(" guide instead of this one.")],1),e._v(" "),a("p",[e._v("On the other hand, having a separate application might give you better security\nguarantees as two processes would be communicating via established binary protocol.\nTendermint Core will not have access to application's state.\nThis is the approach followed in this tutorial.")]),e._v(" "),a("h2",{attrs:{id:"_1-1-installing-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-installing-go"}},[e._v("#")]),e._v(" 1.1 Installing Go")]),e._v(" "),a("p",[e._v("Verify that you have the latest version of Go installed (refer to the "),a("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("official guide for installing Go"),a("OutboundLink")],1),e._v("):")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnbyB2ZXJzaW9uCmdvIHZlcnNpb24gZ28xLjE5LjIgZGFyd2luL2FtZDY0Cg=="}}),e._v(" "),a("h2",{attrs:{id:"_1-2-creating-a-new-go-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-creating-a-new-go-project"}},[e._v("#")]),e._v(" 1.2 Creating a new Go project")]),e._v(" "),a("p",[e._v("We'll start by creating a new Go project.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIga3ZzdG9yZQo="}}),e._v(" "),a("p",[e._v("Inside the example directory, create a "),a("code",[e._v("main.go")]),e._v(" file with the following content:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAogICAgJnF1b3Q7Zm10JnF1b3Q7CikKCmZ1bmMgbWFpbigpIHsKICAgIGZtdC5QcmludGxuKCZxdW90O0hlbGxvLCBUZW5kZXJtaW50IENvcmUmcXVvdDspCn0K"}}),e._v(" "),a("p",[e._v('When run, this should print "Hello, Tendermint Core" to the standard output.')]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y2Qga3ZzdG9yZQokIGdvIHJ1biBtYWluLmdvCkhlbGxvLCBUZW5kZXJtaW50IENvcmUK"}}),e._v(" "),a("p",[e._v("We are going to use "),a("a",{attrs:{href:"https://github.com/golang/go/wiki/Modules",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go modules"),a("OutboundLink")],1),e._v(" for\ndependency management, so let's start by including a dependency on the latest version of\nTendermint.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gbW9kIGluaXQga3ZzdG9yZQpnbyBnZXQgZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnRAbGF0ZXN0Cg=="}}),e._v(" "),a("p",[e._v("After running the above commands you will see two generated files, "),a("code",[e._v("go.mod")]),e._v(" and "),a("code",[e._v("go.sum")]),e._v(".\nThe go.mod file should look similar to:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"bW9kdWxlIGdpdGh1Yi5jb20vbWUvZXhhbXBsZQoKZ28gMS4xOQoKcmVxdWlyZSAoCglnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludCB2MC4zNy4wCikK"}}),e._v(" "),a("p",[e._v("As you write the kvstore application, you can rebuild the binary by\npulling any new dependencies and recompiling it.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z28gZ2V0CmdvIGJ1aWxkCg=="}}),e._v(" "),a("h2",{attrs:{id:"_1-3-writing-a-tendermint-core-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-writing-a-tendermint-core-application"}},[e._v("#")]),e._v(" 1.3 Writing a Tendermint Core application")]),e._v(" "),a("p",[e._v("Tendermint Core communicates with the application through the Application\nBlockChain Interface (ABCI). The messages exchanged through the interface are\ndefined in the ABCI "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/main/proto/tendermint/abci/types.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf\nfile"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("We begin by creating the basic scaffolding for an ABCI application by\ncreating a new type, "),a("code",[e._v("KVStoreApplication")]),e._v(", which implements the\nmethods defined by the "),a("code",[e._v("abcitypes.Application")]),e._v(" interface.")]),e._v(" "),a("p",[e._v("Create a file called "),a("code",[e._v("app.go")]),e._v(" with the following contents:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAoJYWJjaXR5cGVzICZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2FiY2kvdHlwZXMmcXVvdDsKKQoKdHlwZSBLVlN0b3JlQXBwbGljYXRpb24gc3RydWN0e30KCnZhciBfIGFiY2l0eXBlcy5BcHBsaWNhdGlvbiA9ICgqS1ZTdG9yZUFwcGxpY2F0aW9uKShuaWwpCgpmdW5jIE5ld0tWU3RvcmVBcHBsaWNhdGlvbigpICpLVlN0b3JlQXBwbGljYXRpb24gewoJcmV0dXJuICZhbXA7S1ZTdG9yZUFwcGxpY2F0aW9ue30KfQoKZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIEluZm8oaW5mbyBhYmNpdHlwZXMuUmVxdWVzdEluZm8pIGFiY2l0eXBlcy5SZXNwb25zZUluZm8gewoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZUluZm97fQp9CgpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgUXVlcnkocXVlcnkgYWJjaXR5cGVzLlJlcXVlc3RRdWVyeSkgYWJjaXR5cGVzLlJlc3BvbnNlUXVlcnkgewoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZVF1ZXJ5e30KfQoKZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIENoZWNrVHgodHggYWJjaXR5cGVzLlJlcXVlc3RDaGVja1R4KSBhYmNpdHlwZXMuUmVzcG9uc2VDaGVja1R4IHsKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VDaGVja1R4e30KfQoKZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIEluaXRDaGFpbihjaGFpbiBhYmNpdHlwZXMuUmVxdWVzdEluaXRDaGFpbikgYWJjaXR5cGVzLlJlc3BvbnNlSW5pdENoYWluIHsKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VJbml0Q2hhaW57fQp9CgpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgUHJlcGFyZVByb3Bvc2FsKHByb3Bvc2FsIGFiY2l0eXBlcy5SZXF1ZXN0UHJlcGFyZVByb3Bvc2FsKSBhYmNpdHlwZXMuUmVzcG9uc2VQcmVwYXJlUHJvcG9zYWwgewoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZVByZXBhcmVQcm9wb3NhbHt9Cn0KCmZ1bmMgKGFwcCAqS1ZTdG9yZUFwcGxpY2F0aW9uKSBQcm9jZXNzUHJvcG9zYWwocHJvcG9zYWwgYWJjaXR5cGVzLlJlcXVlc3RQcm9jZXNzUHJvcG9zYWwpIGFiY2l0eXBlcy5SZXNwb25zZVByb2Nlc3NQcm9wb3NhbCB7CglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlUHJvY2Vzc1Byb3Bvc2Fse30KfQoKZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIEJlZ2luQmxvY2soYmxvY2sgYWJjaXR5cGVzLlJlcXVlc3RCZWdpbkJsb2NrKSBhYmNpdHlwZXMuUmVzcG9uc2VCZWdpbkJsb2NrIHsKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VCZWdpbkJsb2Nre30KfQoKZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIERlbGl2ZXJUeCh0eCBhYmNpdHlwZXMuUmVxdWVzdERlbGl2ZXJUeCkgYWJjaXR5cGVzLlJlc3BvbnNlRGVsaXZlclR4IHsKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VEZWxpdmVyVHh7fQp9CgpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgRW5kQmxvY2soYmxvY2sgYWJjaXR5cGVzLlJlcXVlc3RFbmRCbG9jaykgYWJjaXR5cGVzLlJlc3BvbnNlRW5kQmxvY2sgewoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZUVuZEJsb2Nre30KfQoKZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIENvbW1pdCgpIGFiY2l0eXBlcy5SZXNwb25zZUNvbW1pdCB7CglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlQ29tbWl0e30KfQoKZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIExpc3RTbmFwc2hvdHMoc25hcHNob3RzIGFiY2l0eXBlcy5SZXF1ZXN0TGlzdFNuYXBzaG90cykgYWJjaXR5cGVzLlJlc3BvbnNlTGlzdFNuYXBzaG90cyB7CglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlTGlzdFNuYXBzaG90c3t9Cn0KCmZ1bmMgKGFwcCAqS1ZTdG9yZUFwcGxpY2F0aW9uKSBPZmZlclNuYXBzaG90KHNuYXBzaG90IGFiY2l0eXBlcy5SZXF1ZXN0T2ZmZXJTbmFwc2hvdCkgYWJjaXR5cGVzLlJlc3BvbnNlT2ZmZXJTbmFwc2hvdCB7CglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlT2ZmZXJTbmFwc2hvdHt9Cn0KCmZ1bmMgKGFwcCAqS1ZTdG9yZUFwcGxpY2F0aW9uKSBMb2FkU25hcHNob3RDaHVuayhjaHVuayBhYmNpdHlwZXMuUmVxdWVzdExvYWRTbmFwc2hvdENodW5rKSBhYmNpdHlwZXMuUmVzcG9uc2VMb2FkU25hcHNob3RDaHVuayB7CglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlTG9hZFNuYXBzaG90Q2h1bmt7fQp9CgpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgQXBwbHlTbmFwc2hvdENodW5rKGNodW5rIGFiY2l0eXBlcy5SZXF1ZXN0QXBwbHlTbmFwc2hvdENodW5rKSBhYmNpdHlwZXMuUmVzcG9uc2VBcHBseVNuYXBzaG90Q2h1bmsgewoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZUFwcGx5U25hcHNob3RDaHVua3t9Cn0K"}}),e._v(" "),a("p",[e._v("The types used here are defined in the Tendermint library and were added as a dependency\nto the project when you ran "),a("code",[e._v("go get")]),e._v(". If your IDE is not recognizing the types, go ahead and run the command again.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gZ2V0IGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50QGxhdGVzdAo="}}),e._v(" "),a("p",[e._v("Now go back to the "),a("code",[e._v("main.go")]),e._v(" and modify the "),a("code",[e._v("main")]),e._v(" function so it matches the following,\nwhere an instance of the "),a("code",[e._v("KVStoreApplication")]),e._v(" type is created.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBtYWluKCkgewogICAgZm10LlByaW50bG4oJnF1b3Q7SGVsbG8sIFRlbmRlcm1pbnQgQ29yZSZxdW90OykKCiAgICBfID0gTmV3S1ZTdG9yZUFwcGxpY2F0aW9uKCkKfQo="}}),e._v(" "),a("p",[e._v("You can recompile and run the application now by running "),a("code",[e._v("go get")]),e._v(" and "),a("code",[e._v("go build")]),e._v(", but it does\nnot do anything.\nSo let's revisit the code adding the logic needed to implement our minimal key/value store\nand to start it along with the Tendermint Service.")]),e._v(" "),a("h3",{attrs:{id:"_1-3-1-add-a-persistent-data-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-add-a-persistent-data-store"}},[e._v("#")]),e._v(" 1.3.1 Add a persistent data store")]),e._v(" "),a("p",[e._v("Our application will need to write its state out to persistent storage so that it\ncan stop and start without losing all of its data.")]),e._v(" "),a("p",[e._v("For this tutorial, we will use "),a("a",{attrs:{href:"https://github.com/dgraph-io/badger",target:"_blank",rel:"noopener noreferrer"}},[e._v("BadgerDB"),a("OutboundLink")],1),e._v(", a\na fast embedded key-value store.")]),e._v(" "),a("p",[e._v("First, add Badger as a dependency of your go module using the "),a("code",[e._v("go get")]),e._v(" command:")]),e._v(" "),a("p",[a("code",[e._v("go get github.com/dgraph-io/badger/v3")])]),e._v(" "),a("p",[e._v("Next, let's update the application and its constructor to receive a handle to the database, as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBLVlN0b3JlQXBwbGljYXRpb24gc3RydWN0IHsKCWRiICAgICAgICAgICAqYmFkZ2VyLkRCCglvbkdvaW5nQmxvY2sgKmJhZGdlci5UeG4KfQoKdmFyIF8gYWJjaXR5cGVzLkFwcGxpY2F0aW9uID0gKCpLVlN0b3JlQXBwbGljYXRpb24pKG5pbCkKCmZ1bmMgTmV3S1ZTdG9yZUFwcGxpY2F0aW9uKGRiICpiYWRnZXIuREIpICpLVlN0b3JlQXBwbGljYXRpb24gewoJcmV0dXJuICZhbXA7S1ZTdG9yZUFwcGxpY2F0aW9ue2RiOiBkYn0KfQo="}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("onGoingBlock")]),e._v(" keeps track of the Badger transaction that will update the application's state when a block\nis completed. Don't worry about it for now, we'll get to that later.")]),e._v(" "),a("p",[e._v("Next, update the "),a("code",[e._v("import")]),e._v(" stanza at the top to include the Badger library:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0KAoJJnF1b3Q7Z2l0aHViLmNvbS9kZ3JhcGgtaW8vYmFkZ2VyL3YzJnF1b3Q7CglhYmNpdHlwZXMgJnF1b3Q7Z2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvYWJjaS90eXBlcyZxdW90OwopCg=="}}),e._v(" "),a("p",[e._v("Finally, update the "),a("code",[e._v("main.go")]),e._v(" file to invoke the updated constructor:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CV8gPSBOZXdLVlN0b3JlQXBwbGljYXRpb24obmlsKQo="}}),e._v(" "),a("h3",{attrs:{id:"_1-3-2-checktx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-checktx"}},[e._v("#")]),e._v(" 1.3.2 CheckTx")]),e._v(" "),a("p",[e._v("When Tendermint Core receives a new transaction from a client, Tendermint asks the application if\nthe transaction is acceptable, using the "),a("code",[e._v("CheckTx")]),e._v(" method.")]),e._v(" "),a("p",[e._v("In our application, a transaction is a string with the form "),a("code",[e._v("key=value")]),e._v(", indicating a key and value to write to the store.")]),e._v(" "),a("p",[e._v("The most basic validation check we can perform is to check if the transaction conforms to the "),a("code",[e._v("key=value")]),e._v(" pattern.\nFor that, let's add the following helper method to app.go:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIGlzVmFsaWQodHggW11ieXRlKSB1aW50MzIgewoJLy8gY2hlY2sgZm9ybWF0CglwYXJ0cyA6PSBieXRlcy5TcGxpdCh0eCwgW11ieXRlKCZxdW90Oz0mcXVvdDspKQoJaWYgbGVuKHBhcnRzKSAhPSAyIHsKCQlyZXR1cm4gMQoJfQoKCXJldHVybiAwCn0K"}}),e._v(" "),a("p",[e._v("Now you can rewrite the "),a("code",[e._v("CheckTx")]),e._v(" method to use the helper function:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIENoZWNrVHgocmVxIGFiY2l0eXBlcy5SZXF1ZXN0Q2hlY2tUeCkgYWJjaXR5cGVzLlJlc3BvbnNlQ2hlY2tUeCB7Cgljb2RlIDo9IGFwcC5pc1ZhbGlkKHJlcS5UeCkKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VDaGVja1R4e0NvZGU6IGNvZGV9Cn0K"}}),e._v(" "),a("p",[e._v("While this "),a("code",[e._v("CheckTx")]),e._v(" is simple and only validates that the transaction is well-formed,\nit is very common for "),a("code",[e._v("CheckTx")]),e._v(" to make more complex use of the state of an application.\nFor example, you may refuse to overwrite an existing value, or you can associate\nversions to the key/value pairs and allow the caller to specify a version to\nperform a conditional update.")]),e._v(" "),a("p",[e._v("Depending on the checks and on the conditions violated, the function may return\ndifferent values, but any response with a non-zero code will be considered invalid\nby Tendermint. Our "),a("code",[e._v("CheckTx")]),e._v(" logic returns 0 to Tendermint when a transaction passes\nits validation checks. The specific value of the code is meaningless to Tendermint.\nNon-zero codes are logged by Tendermint so applications can provide more specific\ninformation on why the transaction was rejected.")]),e._v(" "),a("p",[e._v("Note that "),a("code",[e._v("CheckTx")]),e._v(" does not execute the transaction, it only verifies that that the transaction could be executed. We do not know yet if the rest of the network has agreed to accept this transaction into a block.")]),e._v(" "),a("p",[e._v("Finally, make sure to add the bytes package to the "),a("code",[e._v("import")]),e._v(" stanza at the top of "),a("code",[e._v("app.go")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0KAoJJnF1b3Q7Ynl0ZXMmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2RncmFwaC1pby9iYWRnZXIvdjMmcXVvdDsKCWFiY2l0eXBlcyAmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9hYmNpL3R5cGVzJnF1b3Q7CikK"}}),e._v(" "),a("h3",{attrs:{id:"_1-3-3-beginblock-delivertx-endblock-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-beginblock-delivertx-endblock-commit"}},[e._v("#")]),e._v(" 1.3.3 BeginBlock -> DeliverTx -> EndBlock -> Commit")]),e._v(" "),a("p",[e._v("When the Tendermint consensus engine has decided on the block, the block is transferred to the\napplication over three ABCI method calls: "),a("code",[e._v("BeginBlock")]),e._v(", "),a("code",[e._v("DeliverTx")]),e._v(", and "),a("code",[e._v("EndBlock")]),e._v(".")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("BeginBlock")]),e._v(" is called once to indicate to the application that it is about to\nreceive a block.")]),e._v(" "),a("li",[a("code",[e._v("DeliverTx")]),e._v(" is called repeatedly, once for each application transaction that was included in the block.")]),e._v(" "),a("li",[a("code",[e._v("EndBlock")]),e._v(" is called once to indicate to the application that no more transactions\nwill be delivered to the application in within this block.")])]),e._v(" "),a("p",[e._v("Note that, to implement these calls in our application we're going to make use of Badger's\ntransaction mechanism. We will always refer to these as Badger transactions, not to\nconfuse them with the transactions included in the blocks delivered by Tendermint,\nthe "),a("em",[e._v("application transactions")]),e._v(".")]),e._v(" "),a("p",[e._v("First, let's create a new Badger transaction during "),a("code",[e._v("BeginBlock")]),e._v(". All application transactions in the\ncurrent block will be executed within this Badger transaction.\nThen, return informing Tendermint that the application is ready to receive application transactions:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIEJlZ2luQmxvY2socmVxIGFiY2l0eXBlcy5SZXF1ZXN0QmVnaW5CbG9jaykgYWJjaXR5cGVzLlJlc3BvbnNlQmVnaW5CbG9jayB7CglhcHAub25Hb2luZ0Jsb2NrID0gYXBwLmRiLk5ld1RyYW5zYWN0aW9uKHRydWUpCglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlQmVnaW5CbG9ja3t9Cn0K"}}),e._v(" "),a("p",[e._v("Next, let's modify "),a("code",[e._v("DeliverTx")]),e._v(" to add the "),a("code",[e._v("key")]),e._v(" and "),a("code",[e._v("value")]),e._v(" to the database transaction every time our application\nreceives a new application transaction through "),a("code",[e._v("RequestDeliverTx")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIERlbGl2ZXJUeChyZXEgYWJjaXR5cGVzLlJlcXVlc3REZWxpdmVyVHgpIGFiY2l0eXBlcy5SZXNwb25zZURlbGl2ZXJUeCB7CglpZiBjb2RlIDo9IGFwcC5pc1ZhbGlkKHJlcS5UeCk7IGNvZGUgIT0gMCB7CgkJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZURlbGl2ZXJUeHtDb2RlOiBjb2RlfQoJfQoKCXBhcnRzIDo9IGJ5dGVzLlNwbGl0TihyZXEuVHgsIFtdYnl0ZSgmcXVvdDs9JnF1b3Q7KSwgMikKCWtleSwgdmFsdWUgOj0gcGFydHNbMF0sIHBhcnRzWzFdCgoJaWYgZXJyIDo9IGFwcC5vbkdvaW5nQmxvY2suU2V0KGtleSwgdmFsdWUpOyBlcnIgIT0gbmlsIHsKCQlsb2cuUGFuaWNmKCZxdW90O0Vycm9yIHdyaXRpbmcgdG8gZGF0YWJhc2UsIHVuYWJsZSB0byBleGVjdXRlIHR4OiAldiZxdW90OywgZXJyKQoJfQoKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VEZWxpdmVyVHh7Q29kZTogMH0KfQo="}}),e._v(" "),a("p",[e._v("Note that we check the validity of the transaction "),a("em",[e._v("again")]),e._v(" during "),a("code",[e._v("DeliverTx")]),e._v(".\nTransactions are not guaranteed to be valid when they are delivered to an\napplication, even if they were valid when they were proposed.\nThis can happen if the application state is used to determine transaction\nvalidity. Application state may have changed between the initial execution of "),a("code",[e._v("CheckTx")]),e._v("\nand the transaction delivery in "),a("code",[e._v("DeliverTx")]),e._v(" in a way that rendered the transaction\nno longer valid.")]),e._v(" "),a("p",[a("code",[e._v("EndBlock")]),e._v(" is called to inform the application that the full block has been delivered\nand give the application a chance to perform any other computation needed, before the\neffects of the transactions become permanent.")]),e._v(" "),a("p",[e._v("Note that "),a("code",[e._v("EndBlock")]),e._v(" "),a("strong",[e._v("cannot")]),e._v(" yet commit the Badger transaction we were building\nin during "),a("code",[e._v("DeliverTx")]),e._v(".\nSince other methods, such as "),a("code",[e._v("Query")]),e._v(", rely on a consistent view of the application's\nstate, the application should only update its state by committing the Badger transactions\nwhen the full block has been delivered and the "),a("code",[e._v("Commit")]),e._v(" method is invoked.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Commit")]),e._v(" method tells the application to make permanent the effects of\nthe application transactions.\nLet's update the method to terminate the pending Badger transaction and\npersist the resulting state:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIENvbW1pdCgpIGFiY2l0eXBlcy5SZXNwb25zZUNvbW1pdCB7CglpZiBlcnIgOj0gYXBwLm9uR29pbmdCbG9jay5Db21taXQoKTsgZXJyICE9IG5pbCB7CgkJbG9nLlBhbmljZigmcXVvdDtFcnJvciB3cml0aW5nIHRvIGRhdGFiYXNlLCB1bmFibGUgdG8gY29tbWl0IGJsb2NrOiAldiZxdW90OywgZXJyKQoJfQoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZUNvbW1pdHtEYXRhOiBbXWJ5dGV7fX0KfQo="}}),e._v(" "),a("p",[e._v("Finally, make sure to add the log library to the "),a("code",[e._v("import")]),e._v(" stanza as well:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKCSZxdW90O2J5dGVzJnF1b3Q7CgkmcXVvdDtsb2cmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2RncmFwaC1pby9iYWRnZXIvdjMmcXVvdDsKCWFiY2l0eXBlcyAmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9hYmNpL3R5cGVzJnF1b3Q7CikK"}}),e._v(" "),a("p",[e._v("You may have noticed that the application we are writing will crash if it receives\nan unexpected error from the Badger database during the "),a("code",[e._v("DeliverTx")]),e._v(" or "),a("code",[e._v("Commit")]),e._v(" methods.\nThis is not an accident. If the application received an error from the database, there\nis no deterministic way for it to make progress so the only safe option is to terminate.")]),e._v(" "),a("h3",{attrs:{id:"_1-3-4-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-query"}},[e._v("#")]),e._v(" 1.3.4 Query")]),e._v(" "),a("p",[e._v("When a client tries to read some information from the "),a("code",[e._v("kvstore")]),e._v(", the request will be\nhandled in the "),a("code",[e._v("Query")]),e._v(" method. To do this, let's rewrite the "),a("code",[e._v("Query")]),e._v(" method in "),a("code",[e._v("app.go")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIFF1ZXJ5KHJlcSBhYmNpdHlwZXMuUmVxdWVzdFF1ZXJ5KSBhYmNpdHlwZXMuUmVzcG9uc2VRdWVyeSB7CglyZXNwIDo9IGFiY2l0eXBlcy5SZXNwb25zZVF1ZXJ5e0tleTogcmVxLkRhdGF9CgoJZGJFcnIgOj0gYXBwLmRiLlZpZXcoZnVuYyh0eG4gKmJhZGdlci5UeG4pIGVycm9yIHsKCQlpdGVtLCBlcnIgOj0gdHhuLkdldChyZXEuRGF0YSkKCQlpZiBlcnIgIT0gbmlsIHsKCQkJaWYgZXJyICE9IGJhZGdlci5FcnJLZXlOb3RGb3VuZCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCQkJcmVzcC5Mb2cgPSAmcXVvdDtrZXkgZG9lcyBub3QgZXhpc3QmcXVvdDsKCQkJcmV0dXJuIG5pbAoJCX0KCgkJcmV0dXJuIGl0ZW0uVmFsdWUoZnVuYyh2YWwgW11ieXRlKSBlcnJvciB7CgkJCXJlc3AuTG9nID0gJnF1b3Q7ZXhpc3RzJnF1b3Q7CgkJCXJlc3AuVmFsdWUgPSB2YWwKCQkJcmV0dXJuIG5pbAoJCX0pCgl9KQoJaWYgZGJFcnIgIT0gbmlsIHsKCQlsb2cuUGFuaWNmKCZxdW90O0Vycm9yIHJlYWRpbmcgZGF0YWJhc2UsIHVuYWJsZSB0byBleGVjdXRlIHF1ZXJ5OiAldiZxdW90OywgZGJFcnIpCgl9CglyZXR1cm4gcmVzcAp9Cg=="}}),e._v(" "),a("p",[e._v("Since it reads only committed data from the store, transactions that are part of a block\nthat is being processed are not reflected in the query result.")]),e._v(" "),a("h3",{attrs:{id:"_1-3-5-prepareproposal-and-processproposal"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-5-prepareproposal-and-processproposal"}},[e._v("#")]),e._v(" 1.3.5 PrepareProposal and ProcessProposal")]),e._v(" "),a("p",[a("code",[e._v("PrepareProposal")]),e._v(" and "),a("code",[e._v("ProcessProposal")]),e._v(" are methods introduced in Tendermint v0.37.0\nto give the application more control over the construction and processing of transaction blocks.")]),e._v(" "),a("p",[e._v("When Tendermint Core sees that valid transactions (validated through "),a("code",[e._v("CheckTx")]),e._v(") are available to be\nincluded in blocks, it groups some of these transactions and then gives the application a chance\nto modify the group by invoking "),a("code",[e._v("PrepareProposal")]),e._v(".")]),e._v(" "),a("p",[e._v("The application is free to modify the group before returning from the call, as long as the resulting set\ndoes not use more bytes than `RequestPrepareProposal.max_tx_bytes'\nFor example, the application may reorder, add, or even remove transactions from the group to improve the\nexecution of the block once accepted.\nIn the following code, the application simply returns the unmodified group of transactions:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIFByZXBhcmVQcm9wb3NhbChwcm9wb3NhbCBhYmNpdHlwZXMuUmVxdWVzdFByZXBhcmVQcm9wb3NhbCkgYWJjaXR5cGVzLlJlc3BvbnNlUHJlcGFyZVByb3Bvc2FsIHsKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VQcmVwYXJlUHJvcG9zYWx7VHhzOiBwcm9wb3NhbC5UeHN9Cn0K"}}),e._v(" "),a("p",[e._v("Once a proposed block is received by a node, the proposal is passed to the application to give\nits blessing before voting to accept the proposal.")]),e._v(" "),a("p",[e._v("This mechanism may be used for different reasons, for example to deal with blocks manipulated\nby malicious nodes, in which case the block should not be considered valid.\nThe following code simply accepts all proposals:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIFByb2Nlc3NQcm9wb3NhbChwcm9wb3NhbCBhYmNpdHlwZXMuUmVxdWVzdFByb2Nlc3NQcm9wb3NhbCkgYWJjaXR5cGVzLlJlc3BvbnNlUHJvY2Vzc1Byb3Bvc2FsIHsKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VQcm9jZXNzUHJvcG9zYWx7U3RhdHVzOiBhYmNpdHlwZXMuUmVzcG9uc2VQcm9jZXNzUHJvcG9zYWxfQUNDRVBUfQp9Cg=="}}),e._v(" "),a("h2",{attrs:{id:"_1-4-starting-an-application-and-a-tendermint-core-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-starting-an-application-and-a-tendermint-core-instance"}},[e._v("#")]),e._v(" 1.4 Starting an application and a Tendermint Core instance")]),e._v(" "),a("p",[e._v("Now that we have the basic functionality of our application in place, let's put it all together inside of our "),a("code",[e._v("main.go")]),e._v(" file.")]),e._v(" "),a("p",[e._v("Change the contents of your "),a("code",[e._v("main.go")]),e._v(" file to the following.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAoJJnF1b3Q7ZmxhZyZxdW90OwoJJnF1b3Q7Zm10JnF1b3Q7CglhYmNpc2VydmVyICZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2FiY2kvc2VydmVyJnF1b3Q7CgkmcXVvdDtsb2cmcXVvdDsKCSZxdW90O29zJnF1b3Q7CgkmcXVvdDtvcy9zaWduYWwmcXVvdDsKCSZxdW90O3BhdGgvZmlsZXBhdGgmcXVvdDsKCSZxdW90O3N5c2NhbGwmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2RncmFwaC1pby9iYWRnZXIvdjMmcXVvdDsKCXRtbG9nICZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpYnMvbG9nJnF1b3Q7CikKCnZhciBob21lRGlyIHN0cmluZwp2YXIgc29ja2V0QWRkciBzdHJpbmcKCmZ1bmMgaW5pdCgpIHsKCWZsYWcuU3RyaW5nVmFyKCZhbXA7aG9tZURpciwgJnF1b3Q7a3YtaG9tZSZxdW90OywgJnF1b3Q7JnF1b3Q7LCAmcXVvdDtQYXRoIHRvIHRoZSBrdnN0b3JlIGRpcmVjdG9yeSAoaWYgZW1wdHksIHVzZXMgJEhPTUUvLmt2c3RvcmUpJnF1b3Q7KQoJZmxhZy5TdHJpbmdWYXIoJmFtcDtzb2NrZXRBZGRyLCAmcXVvdDtzb2NrZXQtYWRkciZxdW90OywgJnF1b3Q7dW5peDovL2V4YW1wbGUuc29jayZxdW90OywgJnF1b3Q7VW5peCBkb21haW4gc29ja2V0IGFkZHJlc3MgKGlmIGVtcHR5LCB1c2VzIFwmcXVvdDt1bml4Oi8vZXhhbXBsZS5zb2NrXCZxdW90OyZxdW90OykKfQoKZnVuYyBtYWluKCkgewoJZmxhZy5QYXJzZSgpCglpZiBob21lRGlyID09ICZxdW90OyZxdW90OyB7CgkJaG9tZURpciA9IG9zLkV4cGFuZEVudigmcXVvdDskSE9NRS8ua3ZzdG9yZSZxdW90OykKCX0KCglkYlBhdGggOj0gZmlsZXBhdGguSm9pbihob21lRGlyLCAmcXVvdDtiYWRnZXImcXVvdDspCglkYiwgZXJyIDo9IGJhZGdlci5PcGVuKGJhZGdlci5EZWZhdWx0T3B0aW9ucyhkYlBhdGgpKQoJaWYgZXJyICE9IG5pbCB7CgkJbG9nLkZhdGFsZigmcXVvdDtPcGVuaW5nIGRhdGFiYXNlOiAldiZxdW90OywgZXJyKQoJfQoJZGVmZXIgZnVuYygpIHsKCQlpZiBlcnIgOj0gZGIuQ2xvc2UoKTsgZXJyICE9IG5pbCB7CgkJCWxvZy5GYXRhbGYoJnF1b3Q7Q2xvc2luZyBkYXRhYmFzZTogJXYmcXVvdDssIGVycikKCQl9Cgl9KCkKCglhcHAgOj0gTmV3S1ZTdG9yZUFwcGxpY2F0aW9uKGRiKQoKCWxvZ2dlciA6PSB0bWxvZy5OZXdUTUxvZ2dlcih0bWxvZy5OZXdTeW5jV3JpdGVyKG9zLlN0ZG91dCkpCgoJc2VydmVyIDo9IGFiY2lzZXJ2ZXIuTmV3U29ja2V0U2VydmVyKHNvY2tldEFkZHIsIGFwcCkKCXNlcnZlci5TZXRMb2dnZXIobG9nZ2VyKQoKCWlmIGVyciA6PSBzZXJ2ZXIuU3RhcnQoKTsgZXJyICE9IG5pbCB7CgkJZm10LkZwcmludGYob3MuU3RkZXJyLCAmcXVvdDtlcnJvciBzdGFydGluZyBzb2NrZXQgc2VydmVyOiAldiZxdW90OywgZXJyKQoJCW9zLkV4aXQoMSkKCX0KCWRlZmVyIHNlcnZlci5TdG9wKCkKCgljIDo9IG1ha2UoY2hhbiBvcy5TaWduYWwsIDEpCglzaWduYWwuTm90aWZ5KGMsIG9zLkludGVycnVwdCwgc3lzY2FsbC5TSUdURVJNKQoJJmx0Oy1jCn0K"}}),e._v(" "),a("p",[e._v("This is a huge blob of code, so let's break it down into pieces.")]),e._v(" "),a("p",[e._v("First, we initialize the Badger database and create an app instance:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CWRiUGF0aCA6PSBmaWxlcGF0aC5Kb2luKGhvbWVEaXIsICZxdW90O2JhZGdlciZxdW90OykKCWRiLCBlcnIgOj0gYmFkZ2VyLk9wZW4oYmFkZ2VyLkRlZmF1bHRPcHRpb25zKGRiUGF0aCkpCglpZiBlcnIgIT0gbmlsIHsKCQlsb2cuRmF0YWxmKCZxdW90O09wZW5pbmcgZGF0YWJhc2U6ICV2JnF1b3Q7LCBlcnIpCgl9CglkZWZlciBmdW5jKCkgewoJCWlmIGVyciA6PSBkYi5DbG9zZSgpOyBlcnIgIT0gbmlsIHsKCQkJbG9nLkZhdGFsZigmcXVvdDtDbG9zaW5nIGRhdGFiYXNlOiAldiZxdW90OywgZXJyKQoJCX0KCX0oKQoKCWFwcCA6PSBOZXdLVlN0b3JlQXBwbGljYXRpb24oZGIpCg=="}}),e._v(" "),a("p",[e._v("Then we start the ABCI server and add some signal handling to gracefully stop\nit upon receiving SIGTERM or Ctrl-C. Tendermint Core will act as a client,\nwhich connects to our server and send us transactions and other messages.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"CXNlcnZlciA6PSBhYmNpc2VydmVyLk5ld1NvY2tldFNlcnZlcihzb2NrZXRBZGRyLCBhcHApCglzZXJ2ZXIuU2V0TG9nZ2VyKGxvZ2dlcikKCglpZiBlcnIgOj0gc2VydmVyLlN0YXJ0KCk7IGVyciAhPSBuaWwgewoJCWZtdC5GcHJpbnRmKG9zLlN0ZGVyciwgJnF1b3Q7ZXJyb3Igc3RhcnRpbmcgc29ja2V0IHNlcnZlcjogJXYmcXVvdDssIGVycikKCQlvcy5FeGl0KDEpCgl9CglkZWZlciBzZXJ2ZXIuU3RvcCgpCgoJYyA6PSBtYWtlKGNoYW4gb3MuU2lnbmFsLCAxKQoJc2lnbmFsLk5vdGlmeShjLCBvcy5JbnRlcnJ1cHQsIHN5c2NhbGwuU0lHVEVSTSkKCSZsdDstYwo="}}),e._v(" "),a("h2",{attrs:{id:"_1-5-initializing-and-running"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-initializing-and-running"}},[e._v("#")]),e._v(" 1.5 Initializing and Running")]),e._v(" "),a("p",[e._v("Our application is almost ready to run, but first we'll need to populate the Tendermint Core configuration files.\nThe following command will create a "),a("code",[e._v("tendermint-home")]),e._v(" directory in your project and add a basic set of configuration files in "),a("code",[e._v("tendermint-home/config/")]),e._v(".\nFor more information on what these files contain see "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.37.0/docs/nodes/configuration.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("the configuration documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("From the root of your project, run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gcnVuIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2NtZC90ZW5kZXJtaW50QHYwLjM3LjAgaW5pdCAtLWhvbWUgL3RtcC90ZW5kZXJtaW50LWhvbWUK"}}),e._v(" "),a("p",[e._v("You should see an output similar to the following:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"SVsyMDIyLTExLTA5fDA5OjA2OjM0LjQ0NF0gR2VuZXJhdGVkIHByaXZhdGUgdmFsaWRhdG9yICAgICAgICAgICAgICAgICAgbW9kdWxlPW1haW4ga2V5RmlsZT0vdG1wL3RlbmRlcm1pbnQtaG9tZS9jb25maWcvcHJpdl92YWxpZGF0b3Jfa2V5Lmpzb24gc3RhdGVGaWxlPS90bXAvdGVuZGVybWludC1ob21lL2RhdGEvcHJpdl92YWxpZGF0b3Jfc3RhdGUuanNvbgpJWzIwMjItMTEtMDl8MDk6MDY6MzQuNDQ0XSBHZW5lcmF0ZWQgbm9kZSBrZXkgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9bWFpbiBwYXRoPS90bXAvdGVuZGVybWludC1ob21lL2NvbmZpZy9ub2RlX2tleS5qc29uCklbMjAyMi0xMS0wOXwwOTowNjozNC40NDRdIEdlbmVyYXRlZCBnZW5lc2lzIGZpbGUgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1tYWluIHBhdGg9L3RtcC90ZW5kZXJtaW50LWhvbWUvY29uZmlnL2dlbmVzaXMuanNvbgo="}}),e._v(" "),a("p",[e._v("Now rebuild the app:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gYnVpbGQgLW1vZD1tb2QgIyB1c2UgLW1vZD1tb2QgdG8gYXV0b21hdGljYWxseSByZWZyZXNoIHRoZSBkZXBlbmRlbmNpZXMK"}}),e._v(" "),a("p",[e._v("Everything is now in place to run your application. Run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Li9rdnN0b3JlIC1rdi1ob21lIC90bXAvYmFkZ2VyLWhvbWUK"}}),e._v(" "),a("p",[e._v("The application will start and you should see an output similar to the following:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"YmFkZ2VyIDIwMjIvMTEvMDkgMTc6MDE6MjggSU5GTzogQWxsIDAgdGFibGVzIG9wZW5lZCBpbiAwcwpiYWRnZXIgMjAyMi8xMS8wOSAxNzowMToyOCBJTkZPOiBEaXNjYXJkIHN0YXRzIG5leHRFbXB0eVNsb3Q6IDAKYmFkZ2VyIDIwMjIvMTEvMDkgMTc6MDE6MjggSU5GTzogU2V0IG5leHRUeG5UcyB0byAwCklbMjAyMi0xMS0wOXwxNzowMToyOC43MjZdIHNlcnZpY2Ugc3RhcnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1zZz0mcXVvdDtTdGFydGluZyBBQkNJU2VydmVyIHNlcnZpY2UmcXVvdDsgaW1wbD1BQkNJU2VydmVyCklbMjAyMi0xMS0wOXwxNzowMToyOC43MjZdIFdhaXRpbmcgZm9yIG5ldyBjb25uZWN0aW9uLi4uCg=="}}),e._v(" "),a("p",[e._v("Then we need to start Tendermint Core service and point it to our application.\nOpen a new terminal window and cd to the same folder where the app is running.\nThen execute the following command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gcnVuIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2NtZC90ZW5kZXJtaW50QHYwLjM3LjAgbm9kZSAtLWhvbWUgL3RtcC90ZW5kZXJtaW50LWhvbWUgLS1wcm94eV9hcHA9dW5peDovL2V4YW1wbGUuc29jawo="}}),e._v(" "),a("p",[e._v("This should start the full node and connect to our ABCI application, which will be\nreflected in the application output.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"SVsyMDIyLTExLTA5fDE3OjA3OjA4LjEyNF0gc2VydmljZSBzdGFydCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnPSZxdW90O1N0YXJ0aW5nIEFCQ0lTZXJ2ZXIgc2VydmljZSZxdW90OyBpbXBsPUFCQ0lTZXJ2ZXIKSVsyMDIyLTExLTA5fDE3OjA3OjA4LjEyNF0gV2FpdGluZyBmb3IgbmV3IGNvbm5lY3Rpb24uLi4KSVsyMDIyLTExLTA5fDE3OjA4OjEyLjcwMl0gQWNjZXB0ZWQgYSBuZXcgY29ubmVjdGlvbgpJWzIwMjItMTEtMDl8MTc6MDg6MTIuNzAzXSBXYWl0aW5nIGZvciBuZXcgY29ubmVjdGlvbi4uLgpJWzIwMjItMTEtMDl8MTc6MDg6MTIuNzAzXSBBY2NlcHRlZCBhIG5ldyBjb25uZWN0aW9uCklbMjAyMi0xMS0wOXwxNzowODoxMi43MDNdIFdhaXRpbmcgZm9yIG5ldyBjb25uZWN0aW9uLi4uCg=="}}),e._v(" "),a("p",[e._v("Also, the application using Tendermint Core is producing blocks  🎉🎉 and you can see this reflected in the log output of the service in lines like this:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"SVsyMDIyLTExLTA5fDA5OjA4OjUyLjE0N10gcmVjZWl2ZWQgcHJvcG9zYWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlPWNvbnNlbnN1cyBwcm9wb3NhbD0mcXVvdDtQcm9wb3NhbHsyLzAgKEY1MTg0NDRDMEUzNDgyNzA0MzZBNzNGRDBGMEI5REZFQTc1ODI4NkJFQjI5NDgyRjFFM0JFQTc1MzMwRTgyNUM6MTpDNzNEM0QxMjczRjIsIC0xKSBBRDE5QUUyOTJBNDUgQCAyMDIyLTExLTA5VDEyOjA4OjUyLjE0MzM5M1p9JnF1b3Q7CklbMjAyMi0xMS0wOXwwOTowODo1Mi4xNTJdIHJlY2VpdmVkIGNvbXBsZXRlIHByb3Bvc2FsIGJsb2NrICAgICAgICAgICAgIG1vZHVsZT1jb25zZW5zdXMgaGVpZ2h0PTIgaGFzaD1GNTE4NDQ0QzBFMzQ4MjcwNDM2QTczRkQwRjBCOURGRUE3NTgyODZCRUIyOTQ4MkYxRTNCRUE3NTMzMEU4MjVDCklbMjAyMi0xMS0wOXwwOTowODo1Mi4xNjBdIGZpbmFsaXppbmcgY29tbWl0IG9mIGJsb2NrICAgICAgICAgICAgICAgICAgIG1vZHVsZT1jb25zZW5zdXMgaGVpZ2h0PTIgaGFzaD1GNTE4NDQ0QzBFMzQ4MjcwNDM2QTczRkQwRjBCOURGRUE3NTgyODZCRUIyOTQ4MkYxRTNCRUE3NTMzMEU4MjVDIHJvb3Q9IG51bV90eHM9MApJWzIwMjItMTEtMDl8MDk6MDg6NTIuMTY3XSBleGVjdXRlZCBibG9jayAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2R1bGU9c3RhdGUgaGVpZ2h0PTIgbnVtX3ZhbGlkX3R4cz0wIG51bV9pbnZhbGlkX3R4cz0wCklbMjAyMi0xMS0wOXwwOTowODo1Mi4xNzFdIGNvbW1pdHRlZCBzdGF0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZT1zdGF0ZSBoZWlnaHQ9MiBudW1fdHhzPTAgYXBwX2hhc2g9Cg=="}}),e._v(" "),a("p",[e._v("The blocks, as you can see from the "),a("code",[e._v("num_valid_txs=0")]),e._v(" part, are empty, but let's remedy that next.")]),e._v(" "),a("h2",{attrs:{id:"_1-6-using-the-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-using-the-application"}},[e._v("#")]),e._v(" 1.6 Using the application")]),e._v(" "),a("p",[e._v("Let's try submitting a transaction to our new application.\nOpen another terminal window and run the following curl command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2Jyb2FkY2FzdF90eF9jb21taXQ/dHg9JnF1b3Q7dGVuZGVybWludD1yb2NrcyZxdW90OycK"}}),e._v(" "),a("p",[e._v("If everything went well, you should see a response indicating which height the\ntransaction was included in the blockchain.")]),e._v(" "),a("p",[e._v("Finally, let's make sure that transaction really was persisted by the application.\nRun the following command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Y3VybCAtcyAnbG9jYWxob3N0OjI2NjU3L2FiY2lfcXVlcnk/ZGF0YT0mcXVvdDt0ZW5kZXJtaW50JnF1b3Q7Jwo="}}),e._v(" "),a("p",[e._v("Let's examine the response object that this request returns.\nThe request returns a "),a("code",[e._v("json")]),e._v(" object with a "),a("code",[e._v("key")]),e._v(" and "),a("code",[e._v("value")]),e._v(" field set.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"Li4uCgkmcXVvdDtrZXkmcXVvdDs6ICZxdW90O2RHVnVaR1Z5YldsdWRBPT0mcXVvdDssCgkmcXVvdDt2YWx1ZSZxdW90OzogJnF1b3Q7Y205amEzTT0mcXVvdDssCi4uLgo="}}),e._v(" "),a("p",[e._v("Those values don't look like the "),a("code",[e._v("key")]),e._v(" and "),a("code",[e._v("value")]),e._v(" we sent to Tendermint.\nWhat's going on here?")]),e._v(" "),a("p",[e._v("The response contains a "),a("code",[e._v("base64")]),e._v(" encoded representation of the data we submitted.\nTo get the original value out of this data, we can use the "),a("code",[e._v("base64")]),e._v(" command line utility:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"ZWNobyBjbTlqYTNNPSZxdW90OyB8IGJhc2U2NCAtZAo="}}),e._v(" "),a("h2",{attrs:{id:"outro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outro"}},[e._v("#")]),e._v(" Outro")]),e._v(" "),a("p",[e._v("I hope everything went smoothly and your first, but hopefully not the last,\nTendermint Core application is up and running. If not, please "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("open an issue on\nGithub"),a("OutboundLink")],1),e._v(". To dig\ndeeper, read "),a("a",{attrs:{href:"https://docs.tendermint.com/main/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the docs"),a("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);t.default=n.exports}}]);