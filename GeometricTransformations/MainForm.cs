using GeometricTransformations.Transformations;

namespace GeometricTransformations;

public partial class MainForm : Form
{
    private Bitmap canvas;
    private Color fillColor;
    private double[,]? resultingMatrix;
    private List<Point>? points;
    private List<ITransformation>? transformations;

    public MainForm()
    {
        InitializeComponent();

        fillColor = Color.Black;

        canvas = new Bitmap(
            canvasContainer.Size.Width,
            canvasContainer.Size.Height
        );
    }
}