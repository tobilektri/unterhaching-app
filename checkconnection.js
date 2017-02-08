$( document ).bind( 'deviceready', function() {
	connection();
	/*$( '#btnCheck' ).bind( 'touchstart', connection );*/
} );
var internet;
function connection()
{
	switch(navigator.network.connection.type)
	{
	case Connection.UNKNOWN:
		internet=false;
		break;
	case Connection.NONE:
		internet=false;
		break;
	case Connection.Cell_2G:
		internet=false;
		break;
	default:
		internet=true;

	}
	
}