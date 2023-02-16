namespace GeometricTransformations;

public partial class MainForm : Form
{
    private void DrawPointButton_OnClick(object sender, EventArgs e)
    {
        var text = xCoordinateTextBox.Text;

        if (!int.TryParse(text, out int xCoordinate)) return;

        text = yCoordinateTextBox.Text;

        if (!int.TryParse(text, out int yCoordinate)) return;

        var point = new Point(xCoordinate, yCoordinate);

        SetPixelAt(point);

        AddPointToPointList(point);

        AddPointToListBox(point);
    }

    private void ChooseColorButton_OnClick(object sender, EventArgs e)
    {
        var showDialogResult = ColorDialog.ShowDialog();

        if (showDialogResult != DialogResult.OK) return;

        fillColor = ColorDialog.Color;
    }

    private void ClearScreenButton_OnClick(object sender, EventArgs e)
    {
        canvas = new Bitmap(
            canvasContainer.Size.Width,
            canvasContainer.Size.Height
        );

        canvasContainer.Image = canvas;

        pointListBox.Items.Clear();

        matrixListBox.Items.Clear();

        points?.Clear();
    }
}
