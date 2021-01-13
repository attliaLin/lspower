var searchIndex = JSON.parse('{\
"lspower":{"doc":"Language Server Protocol (LSP) server abstraction for …","i":[[23,"async_trait","lspower","A re-export of <code>async-trait</code> for convenience.",null,null],[0,"jsonrpc","","A subset of JSON-RPC types used by the Language Server …",null,null],[3,"Error","lspower::jsonrpc","A JSON-RPC error object.",null,null],[12,"code","","A number indicating the error type that occurred.",0,null],[12,"message","","A short description of the error.",0,null],[12,"data","","Additional information about the error, if any.",0,null],[4,"ErrorCode","","A list of numeric error codes used in JSON-RPC responses.",null,null],[13,"ParseError","","Invalid JSON was received by the server.",1,null],[13,"InvalidRequest","","The JSON sent is not a valid Request object.",1,null],[13,"MethodNotFound","","The method does not exist / is not available.",1,null],[13,"InvalidParams","","Invalid method parameter(s).",1,null],[13,"InternalError","","Internal JSON-RPC error.",1,null],[13,"ServerError","","Reserved for implementation-defined server errors.",1,null],[13,"RequestCancelled","","The request was cancelled by the client.",1,null],[13,"ContentModified","","The request was invalidated by another incoming request.",1,null],[3,"ServerRequest","","A client-to-server LSP request.",null,null],[6,"Result","","A specialized <code>Result</code> error type for JSON-RPC handlers.",null,null],[4,"Id","","A unique ID used to correlate requests and responses …",null,null],[13,"Number","","Numeric ID.",2,null],[13,"String","","String ID.",2,null],[3,"Response","","A successful or failed JSON-RPC response.",null,null],[11,"ok","","Creates a new successful response from a request ID and …",3,[[["id",4],["value",4]]]],[11,"error","","Creates a new error response from a request ID and <code>Error</code> …",3,[[["error",3],["option",4],["id",4]]]],[11,"from_parts","","Creates a new response from a request ID and either an …",3,[[["id",4],["value",4],["result",6]]]],[11,"into_parts","","Splits the response into a request ID paired with either …",3,[[]]],[11,"id","","Returns the corresponding request ID, if any.",3,[[],[["option",4],["id",4]]]],[4,"Incoming","","An incoming JSON-RPC message.",null,null],[13,"Request","","Request intended for the language server.",4,null],[13,"Response","","Response to a server-to-client request.",4,null],[3,"ClientRequest","","A server-to-client LSP request.",null,null],[4,"Outgoing","","An outgoing JSON-RPC message.",null,null],[13,"Response","","Response to a client-to-server request.",5,null],[13,"Request","","Request intended for the language client.",5,null],[3,"Client","lspower","Handle for communicating with the language client.",null,null],[3,"ExitedError","","Error that occurs when attempting to call the language …",null,null],[3,"LspService","","Service abstraction for the Language Server Protocol.",null,null],[3,"MessageStream","","Stream of messages produced by the language server.",null,null],[3,"Server","","Server for processing requests and responses on standard …",null,null],[8,"LanguageServer","","Trait implemented by language server backends.",null,null],[10,"initialize","","The <code>initialize</code> request is the first request sent from the …",6,[[["initializeparams",3]],[["pin",3],["box",3]]]],[11,"initialized","","The <code>initialized</code> notification is sent from the client to …",6,[[["initializedparams",3]],[["pin",3],["box",3]]]],[10,"shutdown","","The <code>shutdown</code> request asks the server to gracefully shut …",6,[[],[["box",3],["pin",3]]]],[11,"did_change_workspace_folders","","The <code>workspace/didChangeWorkspaceFolders</code> notification is …",6,[[["didchangeworkspacefoldersparams",3]],[["pin",3],["box",3]]]],[11,"did_change_configuration","","The <code>workspace/didChangeConfiguration</code> notification is sent …",6,[[["didchangeconfigurationparams",3]],[["pin",3],["box",3]]]],[11,"did_change_watched_files","","The <code>workspace/didChangeWatchedFiles</code> notification is sent …",6,[[["didchangewatchedfilesparams",3]],[["pin",3],["box",3]]]],[11,"symbol","","The <code>workspace/symbol</code> request is sent from the client to …",6,[[["workspacesymbolparams",3]],[["box",3],["pin",3]]]],[11,"execute_command","","The <code>workspace/executeCommand</code> request is sent from the …",6,[[["executecommandparams",3]],[["box",3],["pin",3]]]],[11,"did_open","","The <code>textDocument/didOpen</code> notification is sent from the …",6,[[["didopentextdocumentparams",3]],[["pin",3],["box",3]]]],[11,"did_change","","The <code>textDocument/didChange</code> notification is sent from the …",6,[[["didchangetextdocumentparams",3]],[["pin",3],["box",3]]]],[11,"will_save","","The <code>textDocument/willSave</code> notification is sent from the …",6,[[["willsavetextdocumentparams",3]],[["pin",3],["box",3]]]],[11,"will_save_wait_until","","The [<code>textDocument/willSaveWaitUntil</code>] request is sent from …",6,[[["willsavetextdocumentparams",3]],[["pin",3],["box",3]]]],[11,"did_save","","The <code>textDocument/didSave</code> notification is sent from the …",6,[[["didsavetextdocumentparams",3]],[["pin",3],["box",3]]]],[11,"did_close","","The <code>textDocument/didClose</code> notification is sent from the …",6,[[["didclosetextdocumentparams",3]],[["pin",3],["box",3]]]],[11,"completion","","The <code>textDocument/completion</code> request is sent from the …",6,[[["completionparams",3]],[["pin",3],["box",3]]]],[11,"completion_resolve","","The <code>completionItem/resolve</code> request is sent from the …",6,[[["completionitem",3]],[["box",3],["pin",3]]]],[11,"hover","","The <code>textDocument/hover</code> request asks the server for hover …",6,[[["hoverparams",3]],[["pin",3],["box",3]]]],[11,"signature_help","","The <code>textDocument/signatureHelp</code> request is sent from the …",6,[[["signaturehelpparams",3]],[["box",3],["pin",3]]]],[11,"goto_declaration","","The <code>textDocument/declaration</code> request asks the server for …",6,[[["gotodeclarationparams",6]],[["pin",3],["box",3]]]],[11,"goto_definition","","The <code>textDocument/definition</code> request asks the server for …",6,[[["gotodefinitionparams",3]],[["pin",3],["box",3]]]],[11,"goto_type_definition","","The <code>textDocument/typeDefinition</code> request asks the server …",6,[[["gototypedefinitionparams",6]],[["box",3],["pin",3]]]],[11,"goto_implementation","","The <code>textDocument/implementation</code> request is sent from the …",6,[[["gotoimplementationparams",6]],[["box",3],["pin",3]]]],[11,"references","","The <code>textDocument/references</code> request is sent from the …",6,[[["referenceparams",3]],[["box",3],["pin",3]]]],[11,"document_highlight","","The <code>textDocument/documentHighlight</code> request is sent from …",6,[[["documenthighlightparams",3]],[["pin",3],["box",3]]]],[11,"document_symbol","","The <code>textDocument/documentSymbol</code> request is sent from the …",6,[[["documentsymbolparams",3]],[["box",3],["pin",3]]]],[11,"code_action","","The <code>textDocument/codeAction</code> request is sent from the …",6,[[["codeactionparams",3]],[["pin",3],["box",3]]]],[11,"code_lens","","The <code>textDocument/codeLens</code> request is sent from the client …",6,[[["codelensparams",3]],[["pin",3],["box",3]]]],[11,"code_lens_resolve","","The <code>codeLens/resolve</code> request is sent from the client to …",6,[[["codelens",3]],[["pin",3],["box",3]]]],[11,"document_link","","The <code>textDocument/documentLink</code> request is sent from the …",6,[[["documentlinkparams",3]],[["box",3],["pin",3]]]],[11,"document_link_resolve","","The <code>documentLink/resolve</code> request is sent from the client …",6,[[["documentlink",3]],[["box",3],["pin",3]]]],[11,"document_color","","The <code>textDocument/documentColor</code> request is sent from the …",6,[[["documentcolorparams",3]],[["pin",3],["box",3]]]],[11,"color_presentation","","The [<code>textDocument/colorPresentation</code>] request is sent from …",6,[[["colorpresentationparams",3]],[["box",3],["pin",3]]]],[11,"formatting","","The <code>textDocument/formatting</code> request is sent from the …",6,[[["documentformattingparams",3]],[["pin",3],["box",3]]]],[11,"range_formatting","","The <code>textDocument/rangeFormatting</code> request is sent from the …",6,[[["documentrangeformattingparams",3]],[["pin",3],["box",3]]]],[11,"on_type_formatting","","The <code>textDocument/onTypeFormatting</code> request is sent from …",6,[[["documentontypeformattingparams",3]],[["pin",3],["box",3]]]],[11,"rename","","The <code>textDocument/rename</code> request is sent from the client …",6,[[["renameparams",3]],[["box",3],["pin",3]]]],[11,"prepare_rename","","The <code>textDocument/prepareRename</code> request is sent from the …",6,[[["textdocumentpositionparams",3]],[["box",3],["pin",3]]]],[11,"folding_range","","The <code>textDocument/foldingRange</code> request is sent from the …",6,[[["foldingrangeparams",3]],[["box",3],["pin",3]]]],[11,"selection_range","","The <code>textDocument/selectionRange</code> request is sent from the …",6,[[["selectionrangeparams",3]],[["pin",3],["box",3]]]],[11,"incoming_calls","","",6,[[["callhierarchyincomingcallsparams",3]],[["box",3],["pin",3]]]],[11,"outgoing_calls","","",6,[[["callhierarchyoutgoingcallsparams",3]],[["pin",3],["box",3]]]],[11,"prepare_call_hierarchy","","",6,[[["callhierarchyprepareparams",3]],[["box",3],["pin",3]]]],[11,"semantic_tokens_full","","",6,[[["semantictokensparams",3]],[["box",3],["pin",3]]]],[11,"semantic_tokens_full_delta","","",6,[[["semantictokensdeltaparams",3]],[["pin",3],["box",3]]]],[11,"semantic_tokens_range","","",6,[[["semantictokensrangeparams",3]],[["pin",3],["box",3]]]],[11,"semantic_tokens_refresh","","",6,[[],[["box",3],["pin",3]]]],[11,"code_action_resolve","","",6,[[],[["box",3],["pin",3]]]],[11,"request_else","","This handler can be used to respond to all requests that …",6,[[["value",4],["option",4]],[["box",3],["pin",3]]]],[11,"from","lspower::jsonrpc","",1,[[]]],[11,"into","","",1,[[]]],[11,"to_owned","","",1,[[]]],[11,"clone_into","","",1,[[]]],[11,"to_string","","",1,[[],["string",3]]],[11,"borrow","","",1,[[]]],[11,"borrow_mut","","",1,[[]]],[11,"try_from","","",1,[[],["result",4]]],[11,"try_into","","",1,[[],["result",4]]],[11,"type_id","","",1,[[],["typeid",3]]],[11,"from","","",0,[[]]],[11,"into","","",0,[[]]],[11,"to_owned","","",0,[[]]],[11,"clone_into","","",0,[[]]],[11,"to_string","","",0,[[],["string",3]]],[11,"borrow","","",0,[[]]],[11,"borrow_mut","","",0,[[]]],[11,"try_from","","",0,[[],["result",4]]],[11,"try_into","","",0,[[],["result",4]]],[11,"type_id","","",0,[[],["typeid",3]]],[11,"from","","",7,[[]]],[11,"into","","",7,[[]]],[11,"to_owned","","",7,[[]]],[11,"clone_into","","",7,[[]]],[11,"borrow","","",7,[[]]],[11,"borrow_mut","","",7,[[]]],[11,"try_from","","",7,[[],["result",4]]],[11,"try_into","","",7,[[],["result",4]]],[11,"type_id","","",7,[[],["typeid",3]]],[11,"from","","",2,[[]]],[11,"into","","",2,[[]]],[11,"to_owned","","",2,[[]]],[11,"clone_into","","",2,[[]]],[11,"to_string","","",2,[[],["string",3]]],[11,"borrow","","",2,[[]]],[11,"borrow_mut","","",2,[[]]],[11,"try_from","","",2,[[],["result",4]]],[11,"try_into","","",2,[[],["result",4]]],[11,"type_id","","",2,[[],["typeid",3]]],[11,"from","","",3,[[]]],[11,"into","","",3,[[]]],[11,"to_owned","","",3,[[]]],[11,"clone_into","","",3,[[]]],[11,"borrow","","",3,[[]]],[11,"borrow_mut","","",3,[[]]],[11,"try_from","","",3,[[],["result",4]]],[11,"try_into","","",3,[[],["result",4]]],[11,"type_id","","",3,[[],["typeid",3]]],[11,"from","","",4,[[]]],[11,"into","","",4,[[]]],[11,"to_owned","","",4,[[]]],[11,"clone_into","","",4,[[]]],[11,"borrow","","",4,[[]]],[11,"borrow_mut","","",4,[[]]],[11,"try_from","","",4,[[],["result",4]]],[11,"try_into","","",4,[[],["result",4]]],[11,"type_id","","",4,[[],["typeid",3]]],[11,"from","","",8,[[]]],[11,"into","","",8,[[]]],[11,"to_owned","","",8,[[]]],[11,"clone_into","","",8,[[]]],[11,"to_string","","",8,[[],["string",3]]],[11,"borrow","","",8,[[]]],[11,"borrow_mut","","",8,[[]]],[11,"try_from","","",8,[[],["result",4]]],[11,"try_into","","",8,[[],["result",4]]],[11,"type_id","","",8,[[],["typeid",3]]],[11,"from","","",5,[[]]],[11,"into","","",5,[[]]],[11,"to_owned","","",5,[[]]],[11,"clone_into","","",5,[[]]],[11,"to_string","","",5,[[],["string",3]]],[11,"borrow","","",5,[[]]],[11,"borrow_mut","","",5,[[]]],[11,"try_from","","",5,[[],["result",4]]],[11,"try_into","","",5,[[],["result",4]]],[11,"type_id","","",5,[[],["typeid",3]]],[11,"from","lspower","",9,[[]]],[11,"into","","",9,[[]]],[11,"to_owned","","",9,[[]]],[11,"clone_into","","",9,[[]]],[11,"borrow","","",9,[[]]],[11,"borrow_mut","","",9,[[]]],[11,"try_from","","",9,[[],["result",4]]],[11,"try_into","","",9,[[],["result",4]]],[11,"type_id","","",9,[[],["typeid",3]]],[11,"from","","",10,[[]]],[11,"into","","",10,[[]]],[11,"to_owned","","",10,[[]]],[11,"clone_into","","",10,[[]]],[11,"to_string","","",10,[[],["string",3]]],[11,"borrow","","",10,[[]]],[11,"borrow_mut","","",10,[[]]],[11,"try_from","","",10,[[],["result",4]]],[11,"try_into","","",10,[[],["result",4]]],[11,"type_id","","",10,[[],["typeid",3]]],[11,"from","","",11,[[]]],[11,"into","","",11,[[]]],[11,"borrow","","",11,[[]]],[11,"borrow_mut","","",11,[[]]],[11,"try_from","","",11,[[],["result",4]]],[11,"try_into","","",11,[[],["result",4]]],[11,"type_id","","",11,[[],["typeid",3]]],[11,"from","","",12,[[]]],[11,"into","","",12,[[]]],[11,"borrow","","",12,[[]]],[11,"borrow_mut","","",12,[[]]],[11,"try_from","","",12,[[],["result",4]]],[11,"try_into","","",12,[[],["result",4]]],[11,"type_id","","",12,[[],["typeid",3]]],[11,"from","","",13,[[]]],[11,"into","","",13,[[]]],[11,"borrow","","",13,[[]]],[11,"borrow_mut","","",13,[[]]],[11,"try_from","","",13,[[],["result",4]]],[11,"try_into","","",13,[[],["result",4]]],[11,"type_id","","",13,[[],["typeid",3]]],[11,"from","lspower::jsonrpc","",1,[[]]],[11,"clone","","",1,[[],["errorcode",4]]],[11,"clone","","",0,[[],["error",3]]],[11,"clone","","",2,[[],["id",4]]],[11,"clone","","",3,[[],["response",3]]],[11,"clone","","",4,[[],["incoming",4]]],[11,"clone","","",8,[[],["clientrequest",3]]],[11,"clone","","",5,[[],["outgoing",4]]],[11,"clone","lspower","",9,[[],["client",3]]],[11,"clone","","",10,[[],["exitederror",3]]],[11,"clone","lspower::jsonrpc","",7,[[],["serverrequest",3]]],[11,"eq","","",1,[[["errorcode",4]]]],[11,"ne","","",1,[[["errorcode",4]]]],[11,"eq","","",0,[[["error",3]]]],[11,"ne","","",0,[[["error",3]]]],[11,"eq","","",2,[[["id",4]]]],[11,"ne","","",2,[[["id",4]]]],[11,"eq","","",3,[[["response",3]]]],[11,"ne","","",3,[[["response",3]]]],[11,"eq","","",4,[[["incoming",4]]]],[11,"ne","","",4,[[["incoming",4]]]],[11,"eq","","",8,[[["clientrequest",3]]]],[11,"ne","","",8,[[["clientrequest",3]]]],[11,"eq","","",5,[[["outgoing",4]]]],[11,"ne","","",5,[[["outgoing",4]]]],[11,"eq","lspower","",10,[[["exitederror",3]]]],[11,"eq","lspower::jsonrpc","",7,[[["serverrequest",3]]]],[11,"ne","","",7,[[["serverrequest",3]]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",3,[[["formatter",3]],["result",6]]],[11,"fmt","","",4,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","lspower","",9,[[["formatter",3]],["result",6]]],[11,"fmt","","",10,[[["formatter",3]],["result",6]]],[11,"fmt","","",11,[[["formatter",3]],["result",6]]],[11,"fmt","","",12,[[["formatter",3]],["result",6]]],[11,"fmt","","",13,[[["formatter",3]],["result",6]]],[11,"fmt","lspower::jsonrpc","",7,[[["formatter",3]],["result",6]]],[11,"fmt","","",1,[[["formatter",3]],["result",6]]],[11,"fmt","","",0,[[["formatter",3]],["result",6]]],[11,"fmt","","",2,[[["formatter",3]],["result",6]]],[11,"fmt","","",8,[[["formatter",3]],["result",6]]],[11,"fmt","","",5,[[["formatter",3]],["result",6]]],[11,"fmt","lspower","",10,[[["formatter",3]],["result",6]]],[11,"hash","lspower::jsonrpc","",2,[[]]],[11,"serialize","","",1,[[],["result",4]]],[11,"serialize","","",0,[[],["result",4]]],[11,"serialize","","",2,[[],["result",4]]],[11,"serialize","","",3,[[],["result",4]]],[11,"serialize","","",8,[[],["result",4]]],[11,"serialize","","",5,[[],["result",4]]],[11,"deserialize","","",1,[[],["result",4]]],[11,"deserialize","","",0,[[],["result",4]]],[11,"deserialize","","",2,[[],["result",4]]],[11,"deserialize","","",3,[[],["result",4]]],[11,"deserialize","","",4,[[],["result",4]]],[11,"deserialize","","",7,[[],["result",4]]],[11,"is_terminated","lspower","",11,[[]]],[11,"poll_next","","",11,[[["pin",3],["context",3]],[["poll",4],["option",4]]]],[11,"poll_ready","","",12,[[["context",3]],[["poll",4],["result",4]]]],[11,"call","","",12,[[["incoming",4]]]],[11,"code","lspower::jsonrpc","Returns the integer error code value.",1,[[]]],[11,"description","","Returns a human-readable description of the error.",1,[[]]],[11,"new","","Creates a new error from the given <code>ErrorCode</code>.",0,[[["errorcode",4]]]],[11,"parse_error","","Creates a new parse error (<code>-32700</code>).",0,[[]]],[11,"invalid_request","","Creates a new \\\"invalid request\\\" error (<code>-32600</code>).",0,[[]]],[11,"method_not_found","","Creates a new \\\"method not found\\\" error (<code>-32601</code>).",0,[[]]],[11,"invalid_params","","Creates a new \\\"invalid params\\\" error (<code>-32602</code>).",0,[[]]],[11,"internal_error","","Creates a new internal error (<code>-32603</code>).",0,[[]]],[11,"request_cancelled","","Creates a new \\\"request cancelled\\\" error (<code>-32800</code>).",0,[[]]],[11,"content_modified","","Creates a new \\\"content modified\\\" error (<code>-32801</code>).",0,[[]]],[11,"log_message","lspower","Notifies the client to log a particular message.",9,[[["messagetype",4],["display",8]]]],[11,"show_message","","Notifies the client to display a particular message in …",9,[[["messagetype",4],["display",8]]]],[11,"show_message_request","","Requests the client to display a particular message in …",9,[[["messagetype",4],["display",8],["vec",3],["option",4]]]],[11,"telemetry_event","","Notifies the client to log a telemetry event.",9,[[["serialize",8]]]],[11,"register_capability","","Registers a new capability with the client.",9,[[["vec",3],["registration",3]]]],[11,"unregister_capability","","Unregisters a capability with the client.",9,[[["vec",3],["unregistration",3]]]],[11,"workspace_folders","","Fetches the current open list of workspace folders.",9,[[]]],[11,"configuration","","Fetches configuration settings from the client.",9,[[["vec",3],["configurationitem",3]]]],[11,"apply_edit","","Requests a workspace resource be edited on the client …",9,[[["option",4],["workspaceedit",3],["string",3]]]],[11,"publish_diagnostics","","Submits validation diagnostics for an open file with the …",9,[[["vec",3],["diagnostic",3],["url",3],["option",4]]]],[11,"send_custom_notification","","Sends a custom notification to the client.",9,[[]]],[11,"new","","Creates a new <code>LspService</code> with the given server backend, …",12,[[]]],[11,"new","","Creates a new <code>Server</code> with the given <code>stdin</code> and <code>stdout</code> …",13,[[]]],[11,"interleave","","Interleaves the given stream of messages into <code>stdout</code> …",13,[[],["server",3]]],[11,"serve","","Spawns the service with messages read through <code>stdin</code> and …",13,[[]]]],"p":[[3,"Error"],[4,"ErrorCode"],[4,"Id"],[3,"Response"],[4,"Incoming"],[4,"Outgoing"],[8,"LanguageServer"],[3,"ServerRequest"],[3,"ClientRequest"],[3,"Client"],[3,"ExitedError"],[3,"MessageStream"],[3,"LspService"],[3,"Server"]]}\
}');
addSearchOptions(searchIndex);initSearch(searchIndex);