namespace GeometricTransformations;

public partial class MainForm : Form
{
    private void CanvasContainer_OnMouseClick(object sender, MouseEventArgs e)
    {
        if (e.Button != MouseButtons.Left) return;

        UpdateCoordinatesTextBoxes(e.X, e.Y);

        var point = new Point(e.X, e.Y);

        SetPixelAt(point);

        AddPointToPointList(point);

        AddPointToListBox(point);
    }

    private void CanvasContainer_OnMouseMove(object sender, MouseEventArgs e)
    {
        UpdateCoordinatesTextBoxes(e.X, e.Y);

        if (e.Button != MouseButtons.Left) return;

        SetPixelAt(new Point(e.X, e.Y));
    }
}
