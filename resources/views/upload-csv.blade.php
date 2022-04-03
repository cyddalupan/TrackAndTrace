<h3>{{ $message }}</h3>
<table width="600">
    <form action="upload-csv" method="post" enctype="multipart/form-data">
        @csrf
        <tr>
            <td width="20%">Select file</td>
            <td width="80%"><input type="file" name="file" id="file" /></td>
        </tr>
        <tr>
            <td>Submit</td>
            <td><input type="submit" name="submit" value="Upload" /></td>
        </tr>
    </form>
</table>