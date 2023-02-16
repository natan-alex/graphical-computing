using GeometricTransformations.Transformations;
using GeometricTransformations.Utils;

namespace GeometricTransformations;

public partial class MainForm : Form
{
    private ITransformation? CreateRotationTransformation()
    {
        var text = rotationDegreesTextBox.Text;

        if (!int.TryParse(text, out int degrees)) return null;

        return new RotationTransformation(degrees);
    }

    private ITransformation? CreateTranslationTransformation()
    {
        var inX = xAxisTranslationTextBox.Text;
        var inY = yAxisTranslationTextBox.Text;

        if (!int.TryParse(inX, out int translationInX)) return null;
        if (!int.TryParse(inY, out int translationInY)) return null;

        return new TranslationTransformation(translationInX, translationInY);
    }

    private ITransformation? CreateScaleTransformation()
    {
        var inX = xAxisScaleTextBox.Text;
        var inY = yAxisScaleTextBox.Text;

        if (!int.TryParse(inX, out int scaleInX)) return null;
        if (!int.TryParse(inY, out int scaleInY)) return null;

        return new ScaleTransformation(scaleInX, scaleInY);
    }

    private ITransformation? CreateReflectionTransformation()
    {
        var checkedRadio = reflectionGroupBox.Controls
            .OfType<RadioButton>()
            .FirstOrDefault(r => r.Checked);

        if (checkedRadio is null) return null;

        var kind = (checkedRadio.TabIndex) switch
        {
            0 => ReflectionKind.JustInX,
            1 => ReflectionKind.JustInY,
            _ => ReflectionKind.InBothAxes,
        };

        return new ReflectionTransformation(kind);
    }

    private List<ITransformation?>? CreateShearTransformations()
    {
        if (points is null) return null;

        var inX = shearInXTextBox.Text;
        var inY = shearInYTextBox.Text;

        if (!int.TryParse(inX, out int shearInX)) return null;
        if (!int.TryParse(inY, out int shearInY)) return null;

        var transformations = new List<ITransformation?>(points.Count);

        foreach (var point in points)
        {
            transformations.Add(new ShearTransformation(point, shearInX, shearInY));
        }

        return transformations;
    }

    private List<ITransformation> CreateListWithAllTransformations()
    {
        var rotationOperation = CreateRotationTransformation();
        var translationOperation = CreateTranslationTransformation();
        var scaleTransformation = CreateScaleTransformation();
        var reflectionTransformation = CreateReflectionTransformation();
        var shearTransformations = CreateShearTransformations();

        var transformations = new List<ITransformation>();

        transformations.AddIfNotNull(rotationOperation);
        transformations.AddIfNotNull(translationOperation);
        transformations.AddIfNotNull(scaleTransformation);
        transformations.AddIfNotNull(reflectionTransformation);
        transformations.AddAllNotNull(shearTransformations);

        return transformations;
    }

    private void MultiplyEachPointByTheResultingMatrix()
    {
        if (resultingMatrix is null || points is null) return;

        var newPoints = new List<Point>(points.Count);

        foreach (var point in points)
        {
            var pointAsMatrix = point.ToMatrix();

            var product = Matrices.Multiply(resultingMatrix, pointAsMatrix);

            var asPoint = product?.AsPoint();

            newPoints.AddIfNotNull(asPoint);
        }

        points = newPoints;
    }

    private void ExecuteTransformationsButton_OnClick(object sender, EventArgs e)
    {
        try
        {
            transformations = CreateListWithAllTransformations();

            resultingMatrix = new ResultingMatrix(transformations).Calculate();

            ShowResultingMatrixOnListBox();

            MultiplyEachPointByTheResultingMatrix();

            ShowPointListOnListBox();

            DrawPointListOnPictureBox();
        }
        catch
        {
            
        }
    }
}
