import Command from '@ckeditor/ckeditor5-core/src/command';
export default class ImageBrowseCommand extends Command {
	execute(url) {

		BrowserCenter(url, 'ImageBrowser', 800, 600);

		function BrowserOpen(url, name, prms) {
			window.open(url, name, prms);
			return false;
		}

		function BrowserCenter(url, name, popwidth, popheight) {
			//alert(url + "-" + name);
			var left = (screen.width - popwidth) / 2;
			var top = (screen.height - popheight) / 2;
			var params = 'width=' + popwidth + ', height=' + popheight;
			params += ', top=' + top + ', left=' + left;
			params += ', directories=0';
			params += ', location=0';
			params += ', menubar=0';
			params += ', resizable=1';
			params += ', scrollbars=1';
			params += ', status=0';
			params += ', toolbar=0';
			return BrowserOpen(url, name, params);
		}
	}
}
