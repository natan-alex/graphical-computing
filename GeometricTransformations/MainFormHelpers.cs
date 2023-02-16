using System.Text;

namespace GeometricTransformations;

public partial class MainForm : Form
{
    private void SetPixelAt(Point point)
    {
        canvas.SetPixel(point.X, point.Y, fillColor);

        canvasContainer.Image = canvas;
    }

    private void UpdateCoordinatesTextBoxes(int x, int y)
    {
        xCoordinateTextBox.Text = x.ToString();
        yCoordinateTextBox.Text = y.ToString();
    }

    private void AddPointToPointList(Point point)
    {
        points ??= new List<Point>();

        points.Add(point);
    }

    private void AddPointToListBox(Point point)
    {
        pointListBox.Items.Add($"({point.X}, {point.Y})");
    }

    private void ShowResultingMatrixOnListBox()
    {
        if (resultingMatrix is null) return;

        matrixListBox.Items.Clear();

        for (var row = 0; row < resultingMatrix.GetLength(0); row++)
        {
            var line = new StringBuilder("[ ");

            for (var column = 0; column < resultingMatrix.GetLength(1); column++)
            {
                line.Append($"{resultingMatrix[row, column]:0.00}");

                line.Append('\t');
            }

            line.Remove(line.Length - 1, 1);
            line.Append(" ]");

            matrixListBox.Items.Add(line);
        }
    }

    private void ShowPointListOnListBox()
    {
        if (points is null) return;

        pointListBox.Items.Clear();

        foreach (var point in points)
        {
            AddPointToListBox(point);
        }
    }

    private void DrawPointListOnPictureBox()
    {
        if (points is null) return;

        fillColor = Color.Blue;

        foreach (var point in points)
        {
            SetPixelAt(point);
        }
    }
}
